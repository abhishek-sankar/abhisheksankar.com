**Authors:** Abhishek Sankar, Smit Patel, Anushka Bhave  
**Course:** ANLP F25  
**Date:** Fall 2025

## Introduction

This project explored a simple but practical question: how do you make a language model answer local-domain questions about Pittsburgh and Carnegie Mellon University without sounding fluent but wrong?

The core issue is that generic LLMs are decent at producing plausible answers, but much less reliable on narrow, factual, location-specific domains. Questions about CMU departments, Pittsburgh neighborhoods, city events, local history, sports teams, or civic information are exactly the kind of queries where a model often knows just enough to hallucinate.

We built a retrieval-augmented generation (RAG) system to ground answers in a curated knowledge base rather than relying on model memory alone.

## Problem Setup

The system was designed to answer factual questions about:

- Carnegie Mellon University
- Pittsburgh neighborhoods and landmarks
- local history and civic information
- events, food, and cultural activities
- sports and city-specific entities

To support that, we assembled a domain-specific corpus from public sources including CMU pages, City of Pittsburgh resources, Pittsburgh event pages, local festival sites, and sports-related sources.

## System Design

The final pipeline had four main parts:

1. crawl and clean domain-specific documents
2. chunk documents into retrieval-sized passages
3. retrieve relevant passages with both dense and sparse methods
4. generate an answer using retrieved context plus the user question

### Knowledge Resource

The corpus covered more than 100 web sources and documents spanning CMU academics, campus life, Pittsburgh history, attractions, food, festivals, and sports. Documents were cleaned, normalized, and chunked into semantically coherent passages.

Two design choices mattered here:

- We prioritized authoritative local sources rather than broad web coverage.
- We preserved enough chunk overlap to avoid breaking apart facts that were spread across neighboring sentences.

This improved traceability and made the retrieval stage more useful than simply embedding long, noisy documents.

### Retrieval Stack

We used a hybrid retriever:

- **Dense retrieval (FAISS):** useful when the query and source text express the same idea with different wording. This helped with paraphrased questions and semantically similar phrasing.
- **Sparse retrieval (BM25):** useful when the exact wording matters, especially for names of places, organizations, events, or entities. This helped on keyword-heavy factual lookups.

The main reason to use both was that Pittsburgh- and CMU-related questions regularly require both capabilities. Some queries depend on exact lexical matches, while others are phrased loosely enough that semantic similarity matters more.

## Key Decisions

### 1) Hybrid Retrieval Instead of a Single Retriever

We intentionally did not rely on only dense or only sparse retrieval.

- Dense retrieval is better for paraphrase robustness.
- Sparse retrieval is better for exact names and lexical overlap.
- A local knowledge system needs both because users do not ask questions in one consistent way.

This was one of the most important architectural choices in the project.

### 2) Fusion-Based Reranking

Once both retrievers produced candidate passages, we compared multiple ways to combine them.

#### Reciprocal Rank Fusion (RRF)

$$
\mathrm{RRF}(d) = \sum_{i=1}^{n} \frac{1}{k + r_i(d)}
$$

RRF is rank-based rather than score-based. That makes it robust when different retrievers score documents on incompatible scales.

- **Pros:** stable, simple, and strong when both retrievers agree on good documents
- **Cons:** does not directly use score magnitude, only ranking position

In practice, this gave the best exact-match performance.

#### Borda Count

$$
\mathrm{Borda}(d) = \sum_{i=1}^{n} (N - r_i(d))
$$

Borda also combines rankings, but it rewards documents for appearing high across multiple ranked lists in a more additive way.

- **Pros:** often surfaces a broader mix of useful documents
- **Cons:** can be slightly less precise than RRF when one retriever introduces noisy high-ranked candidates

In our results, Borda tended to produce better recall and stronger partial-answer matching.

#### Score-Normalized Fusion

$$
\mathrm{ScoreNorm}(d) = \sum_{i=1}^{n} \frac{s_i(d) - \mu_i}{\sigma_i}
$$

This variant combines normalized retriever scores directly rather than combining only ranks.

- **Pros:** keeps more information from retriever confidence
- **Cons:** more sensitive to score calibration and distribution mismatch across retrievers

This approach was competitive, but less consistent than rank-based fusion in our setting.

### 3) Retrieval Depth as an Ablation

We tested different retrieval depths rather than assuming more context is always better.

- smaller retrieval sets are cleaner and more deterministic
- larger retrieval sets improve recall, but can introduce irrelevant context

Our experiments showed that top-10 retrieval worked better than shallower settings like top-5 or top-3, suggesting that broader evidence helped as long as fusion remained strong.

### 4) Keep the Generator Modest

We used **Qwen2.5-1.5B-Instruct** as the primary generator and compared against a much smaller baseline model.

This was deliberate. The point was to test whether retrieval quality and fusion strategy were doing real work, rather than letting a much larger generator hide weaknesses in the pipeline.

## Ablations and Technique Differences

We evaluated several axes of variation:

### Dense vs Sparse vs Hybrid Retrieval

- **Dense-only:** semantically flexible, but weaker on exact names and precise factual strings
- **Sparse-only:** strong on entity-heavy questions, but brittle when the query is phrased differently from the source
- **Hybrid:** best overall because it preserved both semantic and lexical signal

On a 50-question subset, dense-only and sparse-only each reached **20% exact match**, while hybrid retrieval with RRF reached **36% exact match**.

### Fusion Strategy Comparison

- **RRF:** best for exact-match accuracy; strongest when both retrievers independently surfaced the correct document
- **Borda:** better recall and stronger F1; useful when broader supporting context mattered
- **Score-normalized fusion:** more dependent on score calibration; could be precise, but was less stable

This matters because not all question-answering tasks reward the same thing. Exact factual QA favors precision. Broader descriptive answers can benefit from more diverse context.

### Retrieval Depth

- **Top-3 / Top-5:** cleaner context, but easier to miss supporting facts
- **Top-10:** better factual coverage and best exact-match performance in our experiments

The best setup used **RRF with top-10 retrieval**.

### Generator Choice

- **Qwen2.5-1.5B-Instruct:** usable and instruction-aligned; strong enough to benefit from good retrieval
- **Tiny-LLM baseline:** failed completely on this task

This made an important point clear: once the problem becomes local and factual, retrieval quality matters, but the generator still needs to be competent enough to use the retrieved evidence.

## Results

Our best-performing configuration used:

- hybrid retrieval with **FAISS + BM25**
- **RRF** for fusion
- **top-10 retrieval**
- **Qwen2.5-1.5B-Instruct** for generation

This setup achieved:

- **40% exact match**
- **0.403 F1**
- **0.424 recall**
- **0.424 precision**

Other notable findings:

- Borda Count achieved **35.2% exact match** with stronger recall-oriented behavior.
- A score-normalized fusion variant reached **32.0% exact match**.
- Closed-book generation dropped to **8% exact match** on a 50-question subset.

That gap between retrieval-grounded and closed-book performance was one of the clearest outcomes of the project.

## What We Learned

Three lessons stood out.

First, domain-specific QA is much more of a retrieval problem than it initially appears. Better prompting alone does not solve factual locality. Corpus quality, chunking, retrieval depth, and reranking mattered more.

Second, hybrid retrieval was worth the added complexity. Dense and sparse retrieval failed in different ways, and combining them was substantially better than betting on one method.

Third, evaluation changed what looked good. Some configurations felt convincing on a handful of examples, but the annotated test set made it obvious which design choices were consistently helping and which were just producing plausible demos.

## Limitations

The system still had several limitations:

- the knowledge base was static and therefore vulnerable to information decay
- current events and newly updated facts were harder to answer reliably
- the evaluation set, while useful, was still relatively small at 193 questions
- the generator was intentionally modest because of compute constraints

These limitations point directly toward the next version of the system: fresher data, stronger retrieval coverage, and better evaluation breadth.

## Takeaway

The main takeaway from this project is that grounded local QA systems improve not because the generator becomes magical, but because retrieval becomes deliberate.

For this problem, the real gains came from combining semantic and lexical retrieval, testing fusion strategies carefully, and evaluating those choices on a real question set rather than isolated examples.

## Notes

This page is a curated single-column web reading version for the portfolio. For the original report formatting, see the PDF link above.

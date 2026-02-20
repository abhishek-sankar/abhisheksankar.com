**Authors:** Smit Patel, Abhishek Sankar, Anushka Bhave  
**Program:** MSAII, Carnegie Mellon University

## Abstract

Large language models can role-play specific identities, but often lose those identities over long conversations ("persona drift"). This paper studies the drift behavior and tests two interventions:

1. **Persona Vectors** (geometric steering in hidden space)
2. **Identity-Grounded Recursive Critique (IGRC)** (agentic self-correction loop)

Across 20-turn dialogues, IGRC arrests the typical downward trend in persona fidelity without retraining the base model.

## Core Idea

Persona drift can be tracked as a turn-wise decay in persona adherence:

$$
\text{DriftSlope} = \frac{\Delta \text{PersonaFidelity}}{\Delta \text{Turns}}
$$

The baseline model shows a negative drift slope, while IGRC pushes that slope near zero (or slightly positive), indicating stable identity behavior over time.

## Method Overview

### 1) Persona Vectors

For each persona, we build contrastive activation pairs and define a normalized direction:

$$
v_P = \frac{\mu(H_{pos}) - \mu(H_{neg})}{\|\mu(H_{pos}) - \mu(H_{neg})\|}
$$

Inference-time steering is applied as:

$$
h_t' = h_t + \alpha \cdot v_P
$$

where $\alpha$ controls steering intensity.

### 2) IGRC

IGRC wraps generation in a monitor-critique-refine loop:

- compare output with persona anchor
- detect semantic/factual drift
- trigger recursive rewrite only when drift exceeds threshold

This "System 2" style process preserves coherence better than direct activation steering alone.

## Main Takeaways

- Persona traits are often linearly separable in representation space.
- Pure steering can harm response quality if over-applied.
- Agentic critique with explicit anchoring is robust for long-horizon consistency.

## Notes

This web version is a curated reading format. For full tables/figures and formatting details, see the PDF link at the top of the page.

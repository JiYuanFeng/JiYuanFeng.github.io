import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeftIcon } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";
import { Section } from "@/components/ui/section";
import { RESUME_DATA } from "@/data/resume-data";

export const metadata: Metadata = {
  title: `Research Scope | ${RESUME_DATA.name}`,
  description: `Research scope of ${RESUME_DATA.name}: multiscale biomedical foundation models across radiology, pathology, and spatial biology.`,
};

export default function ResearchPage() {
  return (
    <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 md:p-16">
      <ModeToggle />
      <section className="mx-auto w-full max-w-2xl space-y-8">
        <Link
          href="/"
          className="content-link inline-flex items-center gap-1 text-[11px]"
        >
          <ArrowLeftIcon className="size-3" />
          Back to homepage
        </Link>

        <Section>
          <h1 className="text-base font-bold">Research</h1>
          <p className="text-pretty text-xs leading-relaxed text-foreground">
            I build{" "}
            <span className="text-blue-600 dark:text-blue-400">
              AI foundation models for biomedicine
            </span>{" "}
            that span scales, from organ-level radiology, through tissue-level
            pathology, down to the cell-and-molecular context of spatial
            biology, and translate them into tools that close the loop between{" "}
            <span className="text-blue-600 dark:text-blue-400">
              clinical diagnosis
            </span>{" "}
            and{" "}
            <span className="text-blue-600 dark:text-blue-400">
              biomedical discovery
            </span>
            .
          </p>
          <p className="text-pretty text-xs leading-relaxed text-foreground">
            My current work targets two long-term directions:
          </p>
          <ul className="space-y-1 text-pretty text-[11px] leading-relaxed text-foreground">
            <li className="px-2 py-2.5">
              <span className="text-blue-600 dark:text-blue-400">
                Whole-patient foundation models
              </span>{" "}
              that integrate imaging, pathology, clinical notes, and
              longitudinal signals to support diagnosis and treatment-response
              prediction.
            </li>
            <li className="px-2 py-2.5">
              <span className="text-blue-600 dark:text-blue-400">
                Spatial-omics foundation models
              </span>{" "}
              that unify transcriptomics, proteomics, and morphology to enable
              biomarker discovery and disease-mechanism analysis.
            </li>
          </ul>
          <p className="text-pretty text-xs leading-relaxed text-foreground">
            Both directions are connected by{" "}
            <span className="text-blue-600 dark:text-blue-400">
              generative modeling, vision-language models, and agentic reasoning
            </span>{" "}
            as common interfaces across modalities.
          </p>
        </Section>

        <img
          src="/research-scope.png"
          alt="Research framework connecting patient-level longitudinal clinical evidence with tissue-level tumor ecosystem evidence through multimodal generative agentic AI for precision oncology and biological discovery."
          className="w-full"
        />

        <Section>
          <h2 className="text-[13px] font-bold">
            Concrete projects across scales
          </h2>
          <ul className="space-y-1 text-pretty text-[11px] leading-relaxed text-foreground">
            <li className="px-2 py-2.5">
              <span className="block text-blue-600 dark:text-blue-400">
                Radiology &amp; Pathology
              </span>
              <ul className="ml-4 mt-1 list-disc space-y-1">
                <li>
                  <a
                    href="https://arxiv.org/abs/2509.03903"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground underline decoration-foreground/30 underline-offset-2 hover:decoration-foreground"
                  >
                    ChexGen
                  </a>{" "}
                  (NEJM AI 2026): a generative foundation model for chest
                  radiography.
                </li>
                <li>
                  <a
                    href="https://arxiv.org/abs/2410.11761"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground underline decoration-foreground/30 underline-offset-2 hover:decoration-foreground"
                  >
                    SlideChat
                  </a>{" "}
                  (CVPR 2025): a vision-language assistant for whole-slide
                  pathology.
                </li>
              </ul>
            </li>
            <li className="px-2 py-2.5">
              <span className="block text-blue-600 dark:text-blue-400">
                Spatial Biology
              </span>
              <ul className="ml-4 mt-1 list-disc space-y-1">
                <li>
                  <a
                    href="https://arxiv.org/abs/2606.24235"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground underline decoration-foreground/30 underline-offset-2 hover:decoration-foreground"
                  >
                    SP-Mind
                  </a>{" "}
                  (ICML 2026): an autonomous reasoning agent for spatial
                  proteomics.
                </li>
              </ul>
            </li>
            <li className="px-2 py-2.5">
              <span className="block text-blue-600 dark:text-blue-400">
                Generative &amp; VL
              </span>
              <ul className="ml-4 mt-1 list-disc space-y-1">
                <li>
                  <a
                    href="https://arxiv.org/abs/2505.19225"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground underline decoration-foreground/30 underline-offset-2 hover:decoration-foreground"
                  >
                    MedITok
                  </a>
                  : a unified tokenizer for medical image synthesis &amp;
                  interpretation.
                </li>
                <li>
                  <a
                    href="https://arxiv.org/abs/2504.01886"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground underline decoration-foreground/30 underline-offset-2 hover:decoration-foreground"
                  >
                    GMAI-VL-R1
                  </a>
                  : reinforcement learning for medical reasoning.
                </li>
              </ul>
            </li>
          </ul>
        </Section>

        <Section>
          <h2 className="text-[13px] font-bold">Datasets &amp; Benchmarks</h2>
          <ul className="space-y-1 text-pretty text-[11px] leading-relaxed text-foreground">
            <li className="px-2 py-2.5">
              <span className="block text-blue-600 dark:text-blue-400">
                Radiology &amp; Pathology
              </span>
              <ul className="ml-4 mt-1 list-disc space-y-1">
                <li>
                  <a
                    href="https://amos22.grand-challenge.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground underline decoration-foreground/30 underline-offset-2 hover:decoration-foreground"
                  >
                    AMOS
                  </a>{" "}
                  (NeurIPS 2022 Oral): large-scale abdominal multi-organ
                  segmentation; the most widely used multi-organ benchmark in
                  the field.
                </li>
                <li>
                  <a
                    href="https://www.codabench.org/competitions/3137/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground underline decoration-foreground/30 underline-offset-2 hover:decoration-foreground"
                  >
                    AMOS-MM
                  </a>{" "}
                  (MICCAI 2024 Challenge): the first multimodal CT analysis
                  benchmark for report generation and visual question answering.
                </li>
                <li>
                  <a
                    href="https://huggingface.co/datasets/General-Medical-AI/SlideChat"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground underline decoration-foreground/30 underline-offset-2 hover:decoration-foreground"
                  >
                    SlideInstruction
                  </a>
                  : a WSI instruction dataset with 4.2K captions and 176K VQA
                  pairs.
                </li>
                <li>
                  <a
                    href="https://huggingface.co/datasets/General-Medical-AI/SlideChat"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground underline decoration-foreground/30 underline-offset-2 hover:decoration-foreground"
                  >
                    SlideBench
                  </a>
                  : a WSI multimodal benchmark spanning captioning and VQA
                  across 21 clinical tasks.
                </li>
              </ul>
            </li>
            <li className="px-2 py-2.5">
              <span className="block text-blue-600 dark:text-blue-400">
                General
              </span>
              <ul className="ml-4 mt-1 list-disc space-y-1">
                <li>
                  <a
                    href="https://arxiv.org/abs/2201.09637"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground underline decoration-foreground/30 underline-offset-2 hover:decoration-foreground"
                  >
                    DrugOOD
                  </a>{" "}
                  (AAAI 2022 Oral): out-of-distribution generalization benchmark
                  for AI-aided drug discovery.
                </li>
                <li>
                  <a
                    href="https://arxiv.org/abs/2311.14580"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground underline decoration-foreground/30 underline-offset-2 hover:decoration-foreground"
                  >
                    AutoBench
                  </a>{" "}
                  (ICLR 2024): automatic benchmark using LLMs as aligners for
                  evaluating vision-language models.
                </li>
                <li>
                  <a
                    href="https://huggingface.co/datasets/General-Medical-AI/GMAI-Reasoning10K"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground underline decoration-foreground/30 underline-offset-2 hover:decoration-foreground"
                  >
                    GMAI-Reasoning10K
                  </a>
                  : a 10K medical VQA instruction dataset for medical reasoning.
                </li>
              </ul>
            </li>
          </ul>
        </Section>

        <footer className="mt-8 text-center text-[11px] text-muted-foreground">
          © {new Date().getFullYear()} Yuanfeng Ji. Built with Next.js &
          Tailwind.
        </footer>
      </section>
    </main>
  );
}

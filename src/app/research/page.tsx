import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeftIcon } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";
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
          className="inline-flex items-center gap-1 text-[11px] text-muted-foreground hover:underline"
        >
          <ArrowLeftIcon className="size-3" />
          Back to homepage
        </Link>

        <div className="space-y-4">
          <h1 className="text-lg font-bold">Research</h1>
          <p className="text-pretty text-[13px] leading-relaxed text-foreground">
            I build <b>AI foundation models for biomedicine</b> that span scales —
            from organ-level radiology, through tissue-level pathology, down to
            the cell-and-molecular context of spatial biology — and translate
            them into tools that close the loop between{" "}
            <b>clinical diagnosis</b> and <b>biomedical discovery</b>.
          </p>
          <p className="text-pretty text-[13px] leading-relaxed text-foreground">
            My current work targets two long-term directions:
          </p>
          <ul className="ml-5 list-disc space-y-2 text-pretty text-[13px] leading-relaxed text-foreground">
            <li>
              <b>Whole-patient foundation models</b> that integrate imaging,
              pathology, clinical notes, and longitudinal signals to support
              diagnosis and treatment-response prediction.
            </li>
            <li>
              <b>Spatial-omics foundation models</b> that unify transcriptomics,
              proteomics, and morphology to enable biomarker discovery and
              disease-mechanism analysis.
            </li>
          </ul>
          <p className="text-pretty text-[13px] leading-relaxed text-foreground">
            Both directions are connected by{" "}
            <b>generative modeling, vision-language models, and agentic
            reasoning</b>{" "}
            as common interfaces across modalities.
          </p>
        </div>

        <img
          src="/research-scope.png"
          alt="Multiscale Biomedical Foundation Models — research scope across radiology, pathology, and spatial biology, applied to clinical diagnosis and biomedical discovery."
          className="w-full"
        />

        <div className="space-y-4">
          <h2 className="text-sm font-bold">Concrete projects across scales</h2>
          <ul className="ml-5 list-disc space-y-2 text-pretty text-[13px] leading-relaxed text-foreground">
            <li>
              <b>Radiology</b> —{" "}
              <a
                href="https://arxiv.org/abs/2509.03903"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-foreground/30 underline-offset-2 hover:decoration-foreground"
              >
                ChexGen
              </a>{" "}
              (NEJM AI 2026): a generative foundation model for chest
              radiography.
            </li>
            <li>
              <b>Pathology</b> —{" "}
              <a
                href="https://arxiv.org/abs/2410.11761"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-foreground/30 underline-offset-2 hover:decoration-foreground"
              >
                SlideChat
              </a>{" "}
              (CVPR 2025): a vision-language assistant for whole-slide pathology.
            </li>
            <li>
              <b>Spatial Biology</b> — SP-Mind (ICML 2026): an autonomous
              reasoning agent for spatial proteomics.
            </li>
            <li>
              <b>Generative &amp; VL</b> —{" "}
              <a
                href="https://arxiv.org/abs/2505.19225"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-foreground/30 underline-offset-2 hover:decoration-foreground"
              >
                MedITok
              </a>{" "}
              (a unified tokenizer for medical image synthesis &amp;
              interpretation),{" "}
              <a
                href="https://arxiv.org/abs/2504.01886"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-foreground/30 underline-offset-2 hover:decoration-foreground"
              >
                GMAI-VL-R1
              </a>{" "}
              (reinforcement learning for medical reasoning).
            </li>
            <li>
              <b>Drug Discovery</b> —{" "}
              <a
                href="https://arxiv.org/abs/2201.09637"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-foreground/30 underline-offset-2 hover:decoration-foreground"
              >
                DrugOOD
              </a>{" "}
              (AAAI 2022 Oral, OOD benchmark for AI-aided drug discovery),{" "}
              <a
                href="https://arxiv.org/abs/2305.15156"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-foreground/30 underline-offset-2 hover:decoration-foreground"
              >
                SyNDock
              </a>{" "}
              (multi-protein docking via learnable group synchronization).
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-sm font-bold">Datasets &amp; Benchmarks</h2>
          <p className="text-pretty text-[13px] leading-relaxed text-foreground">
            Beyond models, I lead community benchmarks that establish
            standardized evaluation across scales.
          </p>
          <ul className="ml-5 list-disc space-y-2 text-pretty text-[13px] leading-relaxed text-foreground">
            <li>
              <b>
                <a
                  href="https://amos22.grand-challenge.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-foreground/30 underline-offset-2 hover:decoration-foreground"
                >
                  AMOS
                </a>
              </b>{" "}
              (NeurIPS 2022 Oral) — large-scale abdominal multi-organ
              segmentation; the most widely used multi-organ benchmark in the
              field.
            </li>
            <li>
              <b>
                <a
                  href="https://www.codabench.org/competitions/3137/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-foreground/30 underline-offset-2 hover:decoration-foreground"
                >
                  AMOS-MM
                </a>
              </b>{" "}
              (MICCAI 2024 Challenge) — the first multimodal CT analysis
              benchmark for report generation and visual question answering.
            </li>
            <li>
              <b>
                <a
                  href="https://arxiv.org/abs/2201.09637"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-foreground/30 underline-offset-2 hover:decoration-foreground"
                >
                  DrugOOD
                </a>
              </b>{" "}
              (AAAI 2022 Oral) — out-of-distribution generalization benchmark
              for AI-aided drug discovery.
            </li>
            <li>
              <b>
                <a
                  href="https://arxiv.org/abs/2311.14580"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-foreground/30 underline-offset-2 hover:decoration-foreground"
                >
                  AutoBench
                </a>
              </b>{" "}
              (ICLR 2024) — automatic benchmark using LLMs as aligners for
              evaluating biomedical vision-language models.
            </li>
            <li>
              <b>GMAI-Reasoning10K</b> — a high-quality 10K medical visual
              question-answering instruction dataset for training and
              evaluating medical reasoning.
            </li>
          </ul>
        </div>

        <footer className="mt-8 text-center text-[11px] text-muted-foreground">
          © {new Date().getFullYear()} Yuanfeng Ji. Built with Next.js & Tailwind.
        </footer>
      </section>
    </main>
  );
}

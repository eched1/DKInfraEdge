export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

export const SITE_NAME = "DK Infra Edge";
export const SITE_DESCRIPTION =
  "Enterprise networking, cloud & DevOps, security hardening, and infrastructure automation consulting for SMB and enterprise.";
export const SITE_TAGLINE = "Infrastructure. Engineered.";

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
] as const;

export const SERVICE_TYPES = [
  "Enterprise Networking",
  "Cloud & DevOps",
  "Monitoring & Observability",
  "Security Hardening",
  "AI Agent Engineering",
  "Infrastructure Automation",
  "General Consultation",
] as const;

export const BLOG_CATEGORIES = [
  "Networking",
  "Cloud/DevOps",
  "Observability",
  "Security",
  "Automation",
] as const;

export const SERVICES = [
  {
    slug: "enterprise-networking",
    title: "Enterprise Networking",
    shortDescription:
      "Design, deploy, and optimize enterprise network architectures with Fortinet, Juniper, and Aruba.",
    description:
      "We architect resilient, high-performance networks built on industry-leading platforms. From campus LAN to data center fabric, our team delivers EVPN-VXLAN overlays, SD-WAN solutions, and zero-trust segmentation that scale with your business.",
    features: [
      "EVPN-VXLAN fabric design and deployment",
      "Fortinet SD-WAN and NGFW architecture",
      "Juniper campus and data center switching",
      "Aruba wireless and ClearPass NAC",
      "Network segmentation and microsegmentation",
      "High-availability and disaster recovery design",
    ],
    icon: "network",
  },
  {
    slug: "cloud-devops",
    title: "Cloud & DevOps",
    shortDescription:
      "Accelerate your cloud journey with infrastructure as code, CI/CD pipelines, and multi-cloud strategy.",
    description:
      "We help teams move from manual provisioning to fully automated, repeatable infrastructure. Whether you're migrating to AWS, Azure, or GCP—or building a hybrid multi-cloud strategy—we bring the Terraform, Ansible, and containerization expertise to get you there.",
    features: [
      "Multi-cloud architecture (AWS, Azure, GCP)",
      "Terraform and OpenTofu IaC modules",
      "Ansible automation for configuration management",
      "Kubernetes and container orchestration",
      "CI/CD pipeline design (GitHub Actions, GitLab CI)",
      "Cost optimization and FinOps consulting",
    ],
    icon: "cloud",
  },
  {
    slug: "monitoring-observability",
    title: "Monitoring & Observability",
    shortDescription:
      "Gain full-stack visibility with purpose-built monitoring, alerting, and dashboards.",
    description:
      "Blind spots in your infrastructure lead to outages, slow troubleshooting, and missed SLAs. We deploy and tune monitoring stacks—LibreNMS, Zabbix, Prometheus, and Grafana—so you can see everything, alert on what matters, and resolve issues fast.",
    features: [
      "LibreNMS and Zabbix network monitoring",
      "Prometheus and Grafana metrics stack",
      "Log aggregation with Loki or ELK",
      "Custom dashboards and alerting rules",
      "SLA reporting and capacity planning",
      "Synthetic monitoring and uptime checks",
    ],
    icon: "monitor",
  },
  {
    slug: "security-hardening",
    title: "Security Hardening",
    shortDescription:
      "Strengthen your security posture with audits, hardening, and best-practice implementation.",
    description:
      "Security isn't a product—it's an ongoing practice. We assess your infrastructure against CIS benchmarks, harden configurations, implement firewall policies, and build incident response playbooks tailored to your environment.",
    features: [
      "CIS benchmark assessments and remediation",
      "Firewall rule auditing and optimization",
      "Endpoint and server hardening",
      "Vulnerability scanning and patch management",
      "Incident response planning",
      "Security awareness training for technical teams",
    ],
    icon: "shield",
  },
  {
    slug: "ai-agent-engineering",
    title: "AI Agent Engineering",
    shortDescription:
      "Design and deploy intelligent automation agents for infrastructure operations and workflows.",
    description:
      "Leverage AI-powered agents to automate complex infrastructure tasks, reduce mean time to resolution, and scale your operations team. We build custom agents that integrate with your existing tools and workflows.",
    features: [
      "Custom AI agent design and development",
      "Infrastructure copilot implementation",
      "Automated incident triage and remediation",
      "Intelligent runbook automation",
      "LLM integration with observability platforms",
      "Agentic workflow orchestration",
    ],
    icon: "cpu",
  },
  {
    slug: "infrastructure-automation",
    title: "Infrastructure Automation",
    shortDescription:
      "Eliminate manual toil with end-to-end automation across your network and cloud infrastructure.",
    description:
      "Manual configuration changes are slow, error-prone, and unscalable. We build automation frameworks using Ansible, Python, and Terraform that bring consistency, speed, and auditability to every infrastructure change.",
    features: [
      "Network automation with Ansible and NAPALM",
      "Python-based automation tooling",
      "GitOps workflows for infrastructure changes",
      "Automated compliance checking",
      "Self-service provisioning portals",
      "Event-driven automation with webhooks",
    ],
    icon: "zap",
  },
] as const;

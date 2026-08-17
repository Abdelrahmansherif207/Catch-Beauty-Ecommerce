import type { FooterData, SocialLink } from "../../types";
import { SocialIcon } from "./SocialIcons";
import Logo from "@/components/ui/Logo";
import FooterAccordion from "./FooterAccordion";
import FooterAccordionItem from "./FooterAccordionItem";
import FooterBottomRow from "./FooterBottomRow";
import FooterContactCard from "./FooterContactCard";

interface Props {
  data: FooterData;
  logoSrc: string;
  siteName: string;
  copyright: string;
  mergedSocialLinks: SocialLink[];
  showContactCard?: boolean;
  showCopyright?: boolean;
}

export default function FooterMobileContent({
  data,
  logoSrc,
  siteName,
  copyright,
  mergedSocialLinks,
  showContactCard = true,
  showCopyright = true,
}: Props) {
  return (
    <div>
      <FooterAccordionItem
        title={
          <Logo
            src={logoSrc || ""}
            alt={siteName || "Logo"}
            textFallback={logoSrc ? undefined : siteName || undefined}
            width={60}
            height={60}
          />
        }
        defaultOpen
      >
        <div>
          <p className="mt-2 text-xs leading-normal font-normal text-white">
            {data.contactInfo.stayInTouchText}
          </p>
          <div className="mt-2 flex gap-2">
            {mergedSocialLinks.map((s) => (
              <a
                key={s.platform}
                href={s.url || "#"}
                aria-label={s.label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-primary/20 bg-primary/5 text-primary transition hover:border-primary/50 hover:bg-primary/10"
              >
                <SocialIcon platform={s.platform} className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </FooterAccordionItem>

      <FooterAccordion columns={data.columns} />

      <FooterAccordionItem title={data.bottomRow.title}>
        <div>
          <FooterBottomRow data={data.bottomRow} />
        </div>
      </FooterAccordionItem>

      {showContactCard && (
        <div className="pt-4">
          <FooterContactCard contactInfo={data.contactInfo} />
        </div>
      )}
      {showCopyright && copyright && (
        <p className="text-xs text-white/60 text-center mt-4 pb-4">{copyright}</p>
      )}
    </div>
  );
}

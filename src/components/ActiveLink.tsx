
import { useRouter } from "next/dist/client/router";
import Link, { LinkProps } from "next/link";
import { cloneElement, ReactElement } from "react";

interface ActiveLinkProps extends LinkProps {
  children: ReactElement;
  shouldMatchExactHref?: boolean;
  colorText: string;
  bgColorLink?: string;
  colorGradient1?: string;
  colorGradient2?: string;
  borderTypeLink?: string;
  borderColorLink?: string;
}

export function ActiveLink({ 
  children, 
  shouldMatchExactHref = true,
  colorText,
  bgColorLink,
  borderTypeLink,
  borderColorLink,
  colorGradient1,
  colorGradient2, 
  ...rest }: ActiveLinkProps) {

  const { asPath } = useRouter()
  let isActive = false;

  if (shouldMatchExactHref && (asPath === rest.href || asPath === rest.as)) {
    isActive = true
  }

  if (!shouldMatchExactHref && (asPath.startsWith(String(rest.href)) || 
    asPath.startsWith(String(rest.as))
  )) {
    isActive = true
  }

  return(
    <Link { ...rest }>
      {cloneElement(children, {
        color: isActive ? `${colorText}` : "purple.400",
        bgColor: isActive ? `${bgColorLink}` : "",
        bgGradient: isActive ? `linear(to-r, ${colorGradient1}, ${colorGradient2})` : "",
        borderRadius: "12px",
        border: isActive ? `${borderTypeLink}` : "",
        borderColor: isActive ? `${borderColorLink}` : ""
      })}
    </Link>
  )
}
import { Metadata } from "next"
import Image from "next/image"

import { cn } from "@/lib/utils"

import { DemoCreateAccount } from "@/components/create-account"
import { DemoPaymentMethod } from "@/components/payment-method"

// import { DemoCookieSettings } from "./components/cookie-settings"

// import { DemoDatePicker } from "./components/date-picker"
// import { DemoGithub } from "./components/github-card"
// import { DemoNotifications } from "./components/notifications"
// import { DemoReportAnIssue } from "./components/report-an-issue"
// import { DemoShareDocument } from "./components/share-document"
// import { DemoTeamMembers } from "./components/team-members"

export const metadata: Metadata = {
  title: "Cards",
  description: "Examples of cards built using the components.",
}

function CardContainer({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "flex items-center justify-center [&>div]:w-full",
        className
      )}
      {...props}
    />
  )
}

export default function CardsPage() {
  return (
    <section className="mx-auto">
      <div className="md:hidden">
        {/* <Image
          src="/examples/cards-light.png"
          width={1280}
          height={1214}
          alt="Cards"
          className="block dark:hidden"
        />
        <Image
          src="/examples/cards-dark.png"
          width={1280}
          height={1214}
          alt="Cards"
          className="hidden dark:block"
        /> */}
      </div>
      <div className="hidden items-start justify-center gap-6  p-8 md:grid lg:grid-cols-2 xl:grid-cols-3">
        {/* <div className="col-span-2 grid items-start gap-6 lg:col-span-1"> */}
        <CardContainer>
          <DemoCreateAccount />
        </CardContainer>
        <CardContainer>
          <DemoPaymentMethod />
        </CardContainer>
        <CardContainer>
          <DemoPaymentMethod />
        </CardContainer>
        <CardContainer>
          <DemoPaymentMethod />
        </CardContainer>
        <CardContainer>
          <DemoPaymentMethod />
        </CardContainer>
        {/* </div> */}
        {/* <div className="col-span-2 grid items-start gap-6 lg:col-span-1">
          <CardContainer>
            <DemoCreateAccount />
          </CardContainer>
          <CardContainer>
            <DemoPaymentMethod />
          </CardContainer>
        </div> */}
        {/* <div className="col-span-2 grid items-start gap-6 lg:col-span-1">
          <CardContainer>
            <DemoTeamMembers />
          </CardContainer>
          <CardContainer>
            <DemoShareDocument />
          </CardContainer>
          <CardContainer>
            <DemoDatePicker />
          </CardContainer>
          <CardContainer>
            <DemoNotifications />
          </CardContainer>
        </div> */}
        {/* <div className="col-span-2 grid items-start gap-6 lg:col-span-2 lg:grid-cols-2 xl:col-span-1 xl:grid-cols-1">
          <CardContainer>
            <DemoReportAnIssue />
          </CardContainer>
          <CardContainer>
            <DemoGithub />
          </CardContainer>
          <CardContainer>
            <DemoCookieSettings />
          </CardContainer>
        </div> */}
      </div>
    </section>
  )
}

import {IoLogoInstagram} from "react-icons/io";

const Footer = () => {
    return (
        <div className={"w-full px-11 max-sm:px-0 mx-auto max-w-screen-xl mt-20 lg:mb-10"}>
            <div
                className="pl-10 py-10 relative bg-cal-dark-card-medium max-sm:bg-cal-mb-dark-card max-sm:h-full
                [background-image:radial-gradient(100%_100%_at_top,rgba(255,255,255,0.05),rgba(255,255,255,0))]
                sm:rounded-[2rem] !w-full !max-w-screen-xl h-full !mx-auto"
            >
                <div
                    className="absolute w-full  scale-[1.2] transform opacity-5
                    [mask-image:radial-gradient(#fff,transparent,75%)]"
                    style={{
                        backgroundImage: "url(/assets/noise.png)",
                        backgroundSize: "30%",
                    }}
                >
                </div>
                <div className={"space-y-5"}>
                    <h1 className={"text-white font-bold text-2xl"}>br10</h1>
                    <p className={"max-w-[250px] lg:block text-white"}>br10.az® is a registered trademark by br10, Inc.
                        All
                        rights reserved.</p>
                </div>
                <nav
                    className="mt-6 max-w-screen-xl mx-auto grid w-full grid-cols-1 gap-x-4 gap-y-10 leading-[125%] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 h-full text-white">
                    <ul>
                        <li className="text-lg font-semibold uppercase">Solutions</li>
                        <li className="pt-4 text-lg "><a
                            className="hover:text-primary-200 flex items-start truncate text-ellipsis transition-colors duration-150 [text-wrap:nowrap]"
                            href="https://github.com/calcom/cal.com">Self-hosted</a></li>
                        <li className="pt-4 text-lg "><a
                            className="hover:text-primary-200 flex items-start truncate text-ellipsis transition-colors duration-150 [text-wrap:nowrap]"
                            href="/pricing">SaaS Hosting</a></li>
                        <li className="pt-4 text-lg "><a
                            className="hover:text-primary-200 flex items-start truncate text-ellipsis transition-colors duration-150 [text-wrap:nowrap]"
                            href="https://cal.com/docs">Docs</a></li>
                        <li className="pt-4 text-lg "><a
                            className="hover:text-primary-200 flex items-start truncate text-ellipsis transition-colors duration-150 [text-wrap:nowrap]"
                            href="/ai">Cal.ai – AI Phone Agent</a></li>
                        <li className="pt-4 text-lg "><a
                            className="hover:text-primary-200 flex items-start truncate text-ellipsis transition-colors duration-150 [text-wrap:nowrap]"
                            href="/enterprise">Enterprise</a></li>
                        <li className="pt-4 text-lg "><a
                            className="hover:text-primary-200 flex items-start truncate text-ellipsis transition-colors duration-150 [text-wrap:nowrap]"
                            href="/platform">Platform</a></li>
                        <li className="pt-4 text-lg "><a
                            className="hover:text-primary-200 flex items-start truncate text-ellipsis transition-colors duration-150 [text-wrap:nowrap]"
                            href="/platform">Cal.com Atoms</a></li>
                        <li className="pt-4 text-lg "><a
                            className="hover:text-primary-200 flex items-start truncate text-ellipsis transition-colors duration-150 [text-wrap:nowrap]"
                            href="/unified">Unified Calendar API</a></li>
                        <li className="pt-4 text-lg "><a
                            className="hover:text-primary-200 flex items-start truncate text-ellipsis transition-colors duration-150 [text-wrap:nowrap]"
                            href="/download">Desktop App</a></li>
                        <li className="pt-4 text-lg "><a
                            className="hover:text-primary-200 flex items-start truncate text-ellipsis transition-colors duration-150 [text-wrap:nowrap]"
                            href="/faq">FAQ</a></li>
                        <li className="pt-4 text-lg "><a
                            className="hover:text-primary-200 flex items-start truncate text-ellipsis transition-colors duration-150 [text-wrap:nowrap]"
                            href="https://cal.com/docs/enterprise-features/api">Enterprise API</a></li>
                        <li className="pt-4 text-lg "><a
                            className="hover:text-primary-200 flex items-start truncate text-ellipsis transition-colors duration-150 [text-wrap:nowrap]"
                            href="https://github.com/calcom/cal.com">Github</a></li>
                        <li className="pt-4 text-lg "><a
                            className="hover:text-primary-200 flex items-start truncate text-ellipsis transition-colors duration-150 [text-wrap:nowrap]"
                            href="https://cal.com/docs/introduction/quick-start/self-hosting/docker">Docker</a></li>
                    </ul>
                    <ul>
                        <li className="text-lg font-semibold uppercase">Use Cases</li>
                        <li className="pt-4 text-lg "><a
                            className="hover:text-primary-200 flex items-start truncate text-ellipsis transition-colors duration-150 [text-wrap:nowrap]"
                            href="/scheduling/sales-teams">Sales</a></li>
                        <li className="pt-4 text-lg "><a
                            className="hover:text-primary-200 flex items-start truncate text-ellipsis transition-colors duration-150 [text-wrap:nowrap]"
                            href="/scheduling/marketing">Marketing</a></li>
                        <li className="pt-4 text-lg "><a
                            className="hover:text-primary-200 flex items-start truncate text-ellipsis transition-colors duration-150 [text-wrap:nowrap]"
                            href="/scheduling/talent-acquisition-teams">Talent Acquisition</a></li>
                        <li className="pt-4 text-lg "><a
                            className="hover:text-primary-200 flex items-start truncate text-ellipsis transition-colors duration-150 [text-wrap:nowrap]"
                            href="/scheduling/customer-support">Customer Support</a></li>
                        <li className="pt-4 text-lg "><a
                            className="hover:text-primary-200 flex items-start truncate text-ellipsis transition-colors duration-150 [text-wrap:nowrap]"
                            href="/scheduling/higher-education">Higher Education</a></li>
                        <li className="pt-4 text-lg "><a
                            className="hover:text-primary-200 flex items-start truncate text-ellipsis transition-colors duration-150 [text-wrap:nowrap]"
                            href="/resources/usecases/telehealth">Telehealth</a></li>
                        <li className="pt-4 text-lg "><a
                            className="hover:text-primary-200 flex items-start truncate text-ellipsis transition-colors duration-150 [text-wrap:nowrap]"
                            href="/scheduling/professional-services">Professional Services</a></li>
                        <li className="pt-4 text-lg "><a
                            className="hover:text-primary-200 flex items-start truncate text-ellipsis transition-colors duration-150 [text-wrap:nowrap]"
                            href="/resources/usecases/hiring-marketplace">Hiring Marketplace</a></li>
                        <li className="pt-4 text-lg "><a
                            className="hover:text-primary-200 flex items-start truncate text-ellipsis transition-colors duration-150 [text-wrap:nowrap]"
                            href="/scheduling/people-operations">Human Resources</a></li>
                        <li className="pt-4 text-lg "><a
                            className="hover:text-primary-200 flex items-start truncate text-ellipsis transition-colors duration-150 [text-wrap:nowrap]"
                            href="/resources/usecases/education">Tutoring</a></li>
                        <li className="pt-4 text-lg "><a
                            className="hover:text-primary-200 flex items-start truncate text-ellipsis transition-colors duration-150 [text-wrap:nowrap]"
                            href="/scheduling/c-suite">C-suite</a></li>
                        <li className="pt-4 text-lg "><a
                            className="hover:text-primary-200 flex items-start truncate text-ellipsis transition-colors duration-150 [text-wrap:nowrap]"
                            href="/scheduling/law">Law</a></li>
                    </ul>
                    <ul>
                        <li className="text-lg font-semibold uppercase">resources</li>
                        <li className="pt-4 text-lg "><a
                            className="hover:text-primary-200 flex items-start truncate text-ellipsis transition-colors duration-150 [text-wrap:nowrap]"
                            href="/blog">Blog</a></li>
                        <li className="pt-4 text-lg "><a
                            className="hover:text-primary-200 flex items-start truncate text-ellipsis transition-colors duration-150 [text-wrap:nowrap]"
                            href="/merch">Merch Store</a></li>
                        <li className="pt-4 text-lg "><a
                            className="hover:text-primary-200 flex items-start truncate text-ellipsis transition-colors duration-150 [text-wrap:nowrap]"
                            href="/open">Open Startup</a></li>
                        <li className="pt-4 text-lg "><a
                            className="hover:text-primary-200 flex items-start truncate text-ellipsis transition-colors duration-150 [text-wrap:nowrap]"
                            href="/resources/feature/teams">Teams</a></li>
                        <li className="pt-4 text-lg "><a
                            className="hover:text-primary-200 flex items-start truncate text-ellipsis transition-colors duration-150 [text-wrap:nowrap]"
                            href="/resources/feature/embed">Embed</a></li>
                        <li className="pt-4 text-lg "><a
                            className="hover:text-primary-200 flex items-start truncate text-ellipsis transition-colors duration-150 [text-wrap:nowrap]"
                            href="/resources/feature/recurring-events">Recurring events</a></li>
                        <li className="pt-4 text-lg "><a
                            className="hover:text-primary-200 flex items-start truncate text-ellipsis transition-colors duration-150 [text-wrap:nowrap]"
                            href="/resources/feature/developers">Developers</a></li>
                        <li className="pt-4 text-lg "><a
                            className="hover:text-primary-200 flex items-start truncate text-ellipsis transition-colors duration-150 [text-wrap:nowrap]"
                            href="/resources/feature/routing-forms">Routing Forms</a></li>
                        <li className="pt-4 text-lg "><a
                            className="hover:text-primary-200 flex items-start truncate text-ellipsis transition-colors duration-150 [text-wrap:nowrap]"
                            href="/resources/feature/workflows">Workflows</a></li>
                        <li className="pt-4 text-lg "><a
                            className="hover:text-primary-200 flex items-start truncate text-ellipsis transition-colors duration-150 [text-wrap:nowrap]"
                            href="/resources/feature/app-store">App Store</a></li>
                        <li className="pt-4 text-lg "><a
                            className="hover:text-primary-200 flex items-start truncate text-ellipsis transition-colors duration-150 [text-wrap:nowrap]"
                            href="/resources/feature/opt-in">Requires confirmation</a></li>
                        <li className="pt-4 text-lg "><a
                            className="hover:text-primary-200 flex items-start truncate text-ellipsis transition-colors duration-150 [text-wrap:nowrap]"
                            href="/resources/feature/payments">Payments</a></li>
                        <li className="pt-4 text-lg "><a
                            className="hover:text-primary-200 flex items-start truncate text-ellipsis transition-colors duration-150 [text-wrap:nowrap]"
                            href="/resources/feature/cal-video">Video Conferencing</a></li>
                    </ul>
                    <ul>
                        <li className="text-lg font-semibold uppercase">Company</li>
                        <li className="pt-4 text-lg "><a
                            className="hover:text-primary-200 flex items-start truncate text-ellipsis transition-colors duration-150 [text-wrap:nowrap]"
                            href="/jobs">Jobs</a></li>
                        <li className="pt-4 text-lg "><a
                            className="hover:text-primary-200 flex items-start truncate text-ellipsis transition-colors duration-150 [text-wrap:nowrap]"
                            href="/about">About</a></li>
                        <li className="pt-4 text-lg "><a
                            className="hover:text-primary-200 flex items-start truncate text-ellipsis transition-colors duration-150 [text-wrap:nowrap]"
                            href="https://app.cal.com/support">Support</a></li>
                        <li className="pt-4 text-lg "><a
                            className="hover:text-primary-200 flex items-start truncate text-ellipsis transition-colors duration-150 [text-wrap:nowrap]"
                            href="/privacy">Privacy</a></li>
                        <li className="pt-4 text-lg "><a
                            className="hover:text-primary-200 flex items-start truncate text-ellipsis transition-colors duration-150 [text-wrap:nowrap]"
                            href="/terms">Terms</a></li>
                        <li className="pt-4 text-lg "><a
                            className="hover:text-primary-200 flex items-start truncate text-ellipsis transition-colors duration-150 [text-wrap:nowrap]"
                            href="https://github.com/calcom/cal.com/blob/main/LICENSE">License</a></li>
                        <li className="pt-4 text-lg "><a
                            className="hover:text-primary-200 flex items-start truncate text-ellipsis transition-colors duration-150 [text-wrap:nowrap]"
                            href="/security">Security</a></li>
                        <li className="pt-4 text-lg "><a
                            className="hover:text-primary-200 flex items-start truncate text-ellipsis transition-colors duration-150 [text-wrap:nowrap]"
                            href="/subscribe">Changelog</a></li>
                    </ul>
                    <ul>
                        <li className="text-lg font-semibold uppercase">Compare to</li>
                        <li className="pt-4 text-lg "><a
                            className="hover:text-primary-200 flex items-start truncate text-ellipsis transition-colors duration-150 [text-wrap:nowrap]"
                            href="/scheduling/calendly-alternative">Calendly</a></li>
                        <li className="pt-4 text-lg "><a
                            className="hover:text-primary-200 flex items-start truncate text-ellipsis transition-colors duration-150 [text-wrap:nowrap]"
                            href="/scheduling/chilipiper-alternative">ChiliPiper</a></li>
                        <li className="pt-4 text-lg "><a
                            className="hover:text-primary-200 flex items-start truncate text-ellipsis transition-colors duration-150 [text-wrap:nowrap]"
                            href="/scheduling/acuity-alternative">Acuity</a></li>
                        <li className="pt-4 text-lg "><a
                            className="hover:text-primary-200 flex items-start truncate text-ellipsis transition-colors duration-150 [text-wrap:nowrap]"
                            href="/scheduling/nylas-alternative">Nylas</a></li>
                        <li className="pt-4 text-lg "><a
                            className="hover:text-primary-200 flex items-start truncate text-ellipsis transition-colors duration-150 [text-wrap:nowrap]"
                            href="/scheduling/savvycal-alternative">Savvycal</a></li>
                        <li className="pt-4 text-lg "><a
                            className="hover:text-primary-200 flex items-start truncate text-ellipsis transition-colors duration-150 [text-wrap:nowrap]"
                            href="/scheduling/cronofy-alternative">Cronofy</a></li>
                        <li className="pt-4 text-lg "><a
                            className="hover:text-primary-200 flex items-start truncate text-ellipsis transition-colors duration-150 [text-wrap:nowrap]"
                            href="/scheduling/timekit-alternative">Timekit</a></li>
                        <li className="pt-4 text-lg "><a
                            className="hover:text-primary-200 flex items-start truncate text-ellipsis transition-colors duration-150 [text-wrap:nowrap]"
                            href="/scheduling/youcanbookme-alternative">YouCanBook.Me</a></li>
                        <li className="pt-4 text-lg "><a
                            className="hover:text-primary-200 flex items-start truncate text-ellipsis transition-colors duration-150 [text-wrap:nowrap]"
                            href="/scheduling/meetingbird-alternative">Meetingbird</a></li>
                        <li className="pt-4 text-lg "><a
                            className="hover:text-primary-200 flex items-start truncate text-ellipsis transition-colors duration-150 [text-wrap:nowrap]"
                            href="/scheduling/hubspot-alternative">Hubspot Scheduler</a></li>
                        <li className="pt-4 text-lg "><a
                            className="hover:text-primary-200 flex items-start truncate text-ellipsis transition-colors duration-150 [text-wrap:nowrap]"
                            href="/scheduling/doodle-alternative">Doodle</a></li>
                        <li className="pt-4 text-lg "><a
                            className="hover:text-primary-200 flex items-start truncate text-ellipsis transition-colors duration-150 [text-wrap:nowrap]"
                            href="/scheduling/woven-alternative">Woven</a></li>
                        <li className="pt-4 text-lg "><a
                            className="hover:text-primary-200 flex items-start truncate text-ellipsis transition-colors duration-150 [text-wrap:nowrap]"
                            href="/scheduling/harmonizely-alternative">Harmonizely</a></li>
                        <li className="pt-4 text-lg "><a
                            className="hover:text-primary-200 flex items-start truncate text-ellipsis transition-colors duration-150 [text-wrap:nowrap]"
                            href="/scheduling/tidycal-alternative">TidyCal</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Footer;
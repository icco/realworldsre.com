import Layout from "components/Layout";

const IndexPage = () => (
  <Layout title="Real-World SRE">
    <article>
      <header className="bg-gold sans-serif">
        <div className="mw9 center pa4 pt5-ns ph7-l">
          <h3 className="f2 f1-m f-headline-l measure-narrow lh-title mv0">
            <span className="bg-black-90 lh-copy white pa1 tracked-tight">
              Real-World SRE
            </span>
          </h3>
          <h4 className="f3 fw1 georgia i">
            The Survival Guide for Responding to a System Outage and Maximizing
            Uptime
          </h4>
          <h5 className="f6 ttu tracked black-80">By Nat Welch</h5>
        </div>
      </header>
      <div className="pa4 ph7-l georgia mw9-l center">
        <p>
          <strong>Buy now!</strong>
        </p>
        <ul className="list pl0 measure">
          <li className="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30">
            <a
              className="f4 fw6 db dark-blue no-underline underline-hover"
              href="https://amzn.to/3ifOLBi"
            >
              Amazon
            </a>
          </li>
          <li className="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30">
            <a
              className="f4 fw6 db dark-blue no-underline underline-hover"
              href="https://www.packtpub.com/product/real-world-sre/9781788628884"
            >
              Packt
            </a>
          </li>
          <li className="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30">
            <a
              className="f4 fw6 db dark-blue no-underline underline-hover"
              href="https://www.oreilly.com/library/view/real-world-sre/9781788628884/"
            >
              O'Reilly
            </a>
          </li>
          <li className="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30">
            <a
              className="f4 fw6 db dark-blue no-underline underline-hover"
              href="https://github.com/PacktPublishing/Real-World-SRE"
            >
              Source Code
            </a>
          </li>
        </ul>

        <p>
          Real-World SRE is the go-to survival guide for the software developer
          in the middle of catastrophic website failure. Site Reliability
          Engineering (SRE) has emerged on the frontline as businesses strive to
          maximize uptime. This book is a step-by-step framework to follow when
          your website is down and the countdown is on to fix it.
        </p>

        <p>
          Nat Welch has battle-hardened experience in reliability engineering at
          some of the biggest outage-sensitive companies on the internet. Arm
          yourself with his tried-and-tested methods for monitoring modern web
          services, setting up alerts, and evaluating your incident response.
        </p>

        <p>
          Real-World SRE goes beyond just reacting to disaster. Uncover the
          tools and strategies needed to safely test and release software, plan
          for long-term growth, and foresee future bottlenecks. Real-World SRE
          gives you the capability to set up your own robust plan of action to
          see you through a company-wide website crisis.
        </p>
        <p>
          Table of Contents
          <ol>
            <li>Introduction</li>
            <li>Monitoring</li>
            <li>Incident Response</li>
            <li>Postmortems</li>
            <li>Testing & Releasing</li>
            <li>Capacity Planning</li>
            <li>Building Tools</li>
            <li>User Experience</li>
            <li>Networking Foundations</li>
            <li>Linux And Cloud Foundations</li>
          </ol>
        </p>
      </div>
    </article>
  </Layout>
);

export default IndexPage;

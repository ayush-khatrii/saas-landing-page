import { FaGoogle, FaFacebook, FaShopify, FaApple, FaGithub } from "react-icons/fa";
import { AiOutlineOpenAI } from "react-icons/ai";

const LogoTicker = () => {
  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <div className="flex justify-around items-center gap-10">
          <div className="flex-1 md:flex-none">
            <h1>Trusted by leading companies</h1>
          </div>
          <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
            <div className="flex flex-none gap-10">
              {[
                FaGoogle,
                FaFacebook,
                FaShopify,
                FaApple,
                FaGithub,
                AiOutlineOpenAI
              ].map((Icon, index) => (
                <Icon key={index} size="30" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LogoTicker
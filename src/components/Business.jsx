import styles, { layout } from "../Style"
import Button from "./Button"
import { features } from "../constants"

const FeaturesCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] ${styles.flexCenter} rounded-full bg-dimBlue`}>
      <img src={icon} alt="icon" className=" w-[50%] h-[50%] object-contain" />
    </div>
    <div className={`flex-1 ml-3 flex flex-col `}>
      <h4 className="font-poppins font-semibold text-white mb-1 text-[18px] leading-[23px]">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite mb-1 text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
)



const Business = () => {
  return (
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>You do the  business, <br className="sm:block hidden" /> we'll handle the money</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Our team of experts uses a methodology to identify the credit cards most likely to fit your needs.
          We examine annual percentage rates,annual fees.
        </p>
        <Button styles="mt-10" />
      </div>

      <div className={`${layout.sectionImg} flex-col`}>
        {
          features.map((feature, index) => (
            <FeaturesCard key={feature.id} {...feature} index={index} />
          ))
        }
      </div>
    </section>
  )
}

export default Business
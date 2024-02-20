import styles, { layout } from "../Style"
import { apple, bill, google } from "../assets"

const Billing = () =>
(
  <section className={layout.sectionReverse}>
    <div className={layout.sectionImg}>
      <img src={bill} alt="billing" className={`w-[100%] h-[100%] relative z-[5]`} />
      <div className={`absolute z-[3] -left-1/2 rounded-full top-0 w-[50%] h-[50%] white__gradient`} />
      <div className={`absolute z-[3] -left-1/2 rounded-full top-0 w-[50%] h-[50%] white__gradient`} />
      <div className={`absolute z-[0] -left-1/2 rounded-full bottom-0 w-[50%] h-[50%] pink__gradient`} />
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>Easily control your <br className="sm:block hidden" /> billing & invoicing.</h2>
      <p className={`${styles.paragraph} mt-5 max-w-[470px]`}> Getting the job done and providing seem-less Transfers to any where in the world today is our Goal in the world today. </p>
      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <img src={apple} alt="apple_store" className={`w-[128px] h-[42px] object-contain mr-5 cursor-pointer`} />
        <img src={google} alt="logo" className={`w-[128px] h-[42px] object-contain cursor-pointer`} />

      </div>
      <div>

      </div>
    </div>

  </section>
)


export default Billing
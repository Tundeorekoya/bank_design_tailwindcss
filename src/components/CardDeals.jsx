import { card } from "../assets"
import styles, { layout } from "../Style"
import Button from "./Button"

const CardDeals = () =>
(
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>Find a better card deal<br className={`sm:block hidden`} /> in few easy steps</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Universal card transfer now available for both new and existing users,
        powerful cards like the master cards and American express.
      </p>
      <div className="mt-10">
        <Button />
      </div>
    </div>
    <div className={layout.sectionImg}>
      <img src={card} alt="card" className={`w-[100%] h-[100%]`} />
    </div>
  </section>
)


export default CardDeals

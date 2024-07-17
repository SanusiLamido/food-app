import styles from "./Item.module.css";
export default function Item({ item }) {
  return (
    <div>
      <div className={styles.itemContainer}>
        <div className={styles.imageContainer}>
          <img className={styles.image}
            src={
              `https://spoonacular.com/cdn/ingredients_100x100/` + item.image
            }
          />
        </div>
        <div className={styles.nameContainer}></div>
        <div className={styles.name}> {item.name}
        <div className={styles.amount}>
        {item.amount} {item.unit}
      </div>
        </div>
      
      
    </div>
    </div>
  );
}

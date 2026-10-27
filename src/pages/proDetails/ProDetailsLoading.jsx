import styles from './proDetails.module.css';

function ProDetailsLoading() {
  return (
    <div className='container my-5'>
      <div className={`${styles.loading} d-flex w-100 gap-3`}>
        <div className={styles.images}>
            <div className={styles['lg-image']}></div>
        </div>
        <div className={styles.details}>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
        </div>
      </div>
    </div>
  )
}

export default ProDetailsLoading

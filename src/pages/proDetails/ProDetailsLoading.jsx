import './ProDetails.css'

function ProDetailsLoading() {
  return (
    <div className='container my-5'>
      <div className='loading d-flex w-100 gap-3'>
        <div className="images">
            <div className="lg-image"></div>
        </div>
        <div className="details">
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

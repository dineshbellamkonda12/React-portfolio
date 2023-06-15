import './PricingCardStyles.css'

import React from 'react'
import { Link } from 'react-router-dom'

const PricingCard = () => {
  return (
    <div className='pricing'>
        <h4>If you require a website developed within a limited timeframe, 
            I offer specialized expertise in designing websites utilizing WordPress. 
            I am highly proficient in delivering efficient and high-quality results. 
            Kindly reach out to me for further inquiries and to discuss your specific requirements.
        </h4>
        <br/> <br/> <br/>
        <div className='card-container'>
            <div className='card'>
                <h3>- Basic -</h3>
                <span className='bar'></span>
                <p className='btc'> £ 100 </p>
                <p>- 3 Days -</p>
                <p>- 3 Pages -</p>
                <p>- Featured -</p>
                <p>- Responsive Design -</p>
                <Link to="/contact" className='btn'>
                    Purchase Now
                </Link>
            </div>

            <div className='card'>
                <h3>- Premium -</h3>
                <span className='bar'></span>
                <p className='btc'> £ 200 </p>
                <p>- 2 Days -</p>
                <p>- 5 Pages -</p>
                <p>- Featured -</p>
                <p>- Responsive Design -</p>
                <Link to="/contact" className='btn'>
                    Purchase Now
                </Link>
            </div>

            <div className='card'>
                <h3>- Business -</h3>
                <span className='bar'></span>
                <p className='btc'> £ 300 </p>
                <p>- 5 Days -</p>
                <p>- 8 Pages -</p>
                <p>- Featured -</p>
                <p>- Responsive Design -</p>
                <Link to="/contact" className='btn'>
                    Purchase Now
                </Link>
            </div>

        </div>
    </div>
  )
}

export default PricingCard
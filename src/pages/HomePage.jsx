import React from 'react'
import banner1 from "../assets/Banner_1.jpg"
import banner2 from "../assets/Banner_2.png"
import banner3 from "../assets/Banner_3.png"
import NewEvent from '../components/NewEvent'
import { News } from '../assets/news'

function HomePage() {
  return (
    <div>
        {/* header */}
        <section className='text-center p-3 font-weight-bold text-white title-text container'>
            <span>PHÒNG QUAN HỆ DOANH NGHIỆP</span>
            <br />
            <span>ĐẠI HỌC FPT CẦN THƠ</span>
        </section>
        {/* carousel */}
        <div id="carouselExampleIndicators" className="carousel slide w-full container my-4" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={banner1} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={banner2} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={banner3} className="d-block w-100" alt="..."/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-target="#carouselExampleIndicators" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-target="#carouselExampleIndicators" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </button>
        </div>
        
        {/* blog */}
        <div className='blog-section container'>
            <h1 className='text-center py-5'>TIN TỨC & SỰ KIỆN</h1>

            <div className='row py-4'>
                {
                    News.map((item) => (
                        <div className='col-12 col-sm-6 col-md-4' key={item?.id}>
                            <NewEvent
                                id={item?.id}
                                title={item?.title}
                                date={item?.date}
                                image={item?.image}
                                description={item?.description}
                            />
                        </div>
                    ))
                }
            </div>
        </div>

    </div>
  )
}

export default HomePage
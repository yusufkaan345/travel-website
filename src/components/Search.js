import React from 'react'
import './Search.css'
import Gold from '../assets/gold.png'

function Search() {
  return (
    <div name="book" className='search'>
      <div className='container'>
        <div className='left'>
          <h2>LUXCURY INCLUDED VACATİONS FOR TWO PEOPLE</h2>
          <p>    Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Maiores impedit officiis, quos quasi sint recusandae nam dolorum
            rerum est molestiae enim architecto? Sequi corrupti esse nam est
            vero numquam! Molestiae placeat libero illum, cupiditate minus eum
            perspiciatis qui distinctio sint cumque! Tempore
            provident similique natus. Odit, dolorum! Tempore, saepe minus?
          </p>
          <div className='search-col-2'>
            <div className='box'>
              <div >
                <img src={Gold} alt="" style={{ marginRight: "1rem" }}></img>
              </div>
              <div>
                <h3>WORLD'S LEADING</h3>
                <p> ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
              </div>
            </div>
            <div className='box2'>
              <div><h3>NO ONE INCLUDES MORE</h3></div>
              <p> ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
              <button >View Packages</button>

            </div>
          </div>
        </div>
        <div className='right'>
          <div className='promo'>
            <h4 className="save"> GET AN ADDITIONAL 7% OFF</h4>
            <p className="timer">12 HOURS LEFT!</p>
            <p className="offers">VIEW ALL CURRENT OFFERS</p>
          </div>
          <form action="">
            <div className="input-wrap">
              <label> Destination</label>
              <select >
                <option value="1"> Grande Antigua</option>
                <option value="1"> Grenda</option>
                <option value="1"> Emerald Bay</option>
                <option value="1"> Bora Bora</option>
                <option value="1"> Key West</option>
                <option value="1"> Maldives</option>
                <option value="1"> Barbados</option>
              </select>
            </div>
            <div className="date">
                <div className="input-wrap">
                  <label> Check-In</label>
                  <input type="date"/>
                </div>
                <div className="input-wrap">
                  <label> Check-Out</label>
                  <input type="date"/>
                </div>
            </div>
            <button> Rates & Availibilities</button>
          </form>
        </div>

      </div>

    </div>
  )
}

export default Search
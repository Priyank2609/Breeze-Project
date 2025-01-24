import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from "react-redux";

const RecentlyProd = () => {
     const recentlyViewed = useSelector((state) => state.carts.recentlyView);
    return (
      <Recently>
        <div className="divs">
          <div className="none">
            <p>Compare Products</p>
            You have no items to compare.
          </div>
        </div>
        {recentlyViewed && recentlyViewed.length > 0 ? (
          <>
            <div className="divs">
              <div className="none">
                <p>Recently Viewed</p>
              </div>

              {recentlyViewed.map((prod, id) => {
                return (
                  <div className="views">
                    <div className="imags">
                      <img src={prod.img[0]} alt="" />
                    </div>
                    <div className="names">
                      <strong className="prod-like">{prod.like}</strong>
                      <span>${prod.price}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        ) : (
          <></>
        )}
      </Recently>
    );
}
export default RecentlyProd;


const Recently = styled.div`
  .divs {
    margin-top: 2.25rem;

    @media (min-width: 770px) {
      /* idth: 100%; */
      width: 220px;
    }
  }
  .names {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    .prod-like {
      font-weight: 600;
    }
  }

  .views {
    display: flex;
    gap: 0.5rem;
    margin-top: 0.5rem;
    padding: 0.5rem;
  }
  img {
    height: 78px;
    width: 78px;
  }

  p {
    font-weight: 700;
    font-size: 1.25rem;
    padding: 0.75rem 0;
    margin-bottom: 0.75rem;
    border-bottom: 1.6px solid black;
  }
  .category {
    margin-bottom: 4px;
  }
`;
import React, { useState } from 'react'
import "./Header.css"
import { FaEuroSign } from "react-icons/fa"
import { AiFillPoundCircle, AiOutlineMenu, AiFillDollarCircle, AiOutlineSearch } from "react-icons/ai"
import { BiLira } from "react-icons/bi"
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function Header() {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div className='Header'>
        <div className="logo">
          <img src="https://www.propertyturkey.com/front/image/home/pt_new_logo.svg" alt="" />
        </div>
        <div className="links">
          <div className="upper__links">
            <div className="logo__tag">
              <img src="https://www.propertyturkey.com/front/image/images2019/Images/partner-button-01.svg" alt="" />
            </div>
            <div className="">
              <div className="currency">
                <a rel="nofollow" href="https://www.propertyturkey.com/change-currency/3" className="currency_1" title="Sterling Pound  "><AiFillPoundCircle /></a> <a rel="nofollow" href="https://www.propertyturkey.com/change-currency/2" className="currency_3" title="Euro "><FaEuroSign /></a> <a rel="nofollow" href="javascript:void(0)" className="currency_5" title="Dollar "><AiFillDollarCircle /></a> <a rel="nofollow" href="https://www.propertyturkey.com/change-currency/4" className="currency_7" title="Turkish Lira "><BiLira /></a>
              </div>

            </div>
            <div className="">
              <div className="style-0">
                <a href="https://www.propertyturkey.com/real_estate/turkey" className="style-1" title="English">EN</a> <a href="https://www.propertyturkey.com/ru/real_estate/turkey" title="Russian" className="style-2">RU</a> <a href="https://www.propertyturkey.com/ar/real_estate/turkey" title="Arabic" className="style-3">AR</a> <a href="https://www.propertyturkey.com/de/real_estate/turkey" title="German" className="style-4">DE</a> <a href="https://www.propertyturkey.com/zh/real_estate/turkey" title="Chinese" className="style-5">中文</a> <a href="https://www.propertyturkey.com/fa/real_estate/turkey" title="Farsi" className="style-6">FA</a>
              </div>

            </div>
          </div>
          <div className="bottoms__links">
            <span>
              <Link>Home</Link>
            </span>

            <span>
              <Link>Buy Real State</Link>
            </span>
            <span>
              <Link>Turkish Citizen</Link>
            </span>

            <span>
              <Link>About turkey</Link>
            </span>
            <span>
              <Link>Buyer Guide</Link>
            </span>

            <span>
              <Link>About Us</Link>
            </span>

            <span>
              <Link>Contact us</Link>
            </span>

            <span>
              <Link>Property Turkey TV</Link>
            </span>






          </div>
        </div>
        <div className="buttons">
          <AiOutlineSearch size={40} />
          <div className="button__bottom">
            <Link className='button__bottom__register'>Register</Link>
            <Link className='button__bottom__login'>Login</Link>
          </div>
        </div>

        <div className="Mobile__menu">
          <AiOutlineMenu onClick={handleOpen} className='fs-1' />
        </div>


      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className='Model__Header'
      >
        <Box sx={style}>
            <Box clas
            >

            </Box>
        </Box>
      </Modal>
    </>
  )
}

import React from 'react';
import  Button  from './Button';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './Item.css'

export const Item = ({ title, Desc, first, descLink, backgroundImg, leftBtnTxt, leftBtnLink, rightBtnTxt, rightBtnLink,twoButtons}) => { 
        return (
            <div className='item' style={{
                backgroundImage:  `url(${backgroundImg})`
                
            }}>
                <div className='item_container'>
                    <div className='item_text'>
                        <p>{title}</p>
                        <div className='item_textDesc'>
                            <p>{Desc}</p>
                        </div>

                    </div>
                <div className='item_lowerThird' >
                    <div className='item_button'>
                        <Button imp='primary' text={leftBtnTxt} link={leftBtnLink} />
                        {twoButtons && (
                            <Button imp='secondary' text={rightBtnTxt} link={rightBtnLink} />
                        )};
                    </div>
                        {first && (
                            <div className='item__expand'>
                                <ExpandMoreIcon />
                            </div>
                        )}
                </div>
                </div>
            </div>
             
        );
    }

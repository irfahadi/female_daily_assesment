import React,{ input } from 'react';
import { FaSistrix } from 'react-icons/fa';

const SearchBar = ({keyword,setKeyword}) => {
    const BarStyling = {width:"55rem",background:"#F2F1F9", border:"none", padding:"0.5rem",margin:"0.5rem"};
    return (
      <input 
       style={BarStyling}
       key="random1"
       value={keyword}
       placeholder={ "search products, articles, topics, brands, etc"}
       onChange={(e) => setKeyword(e.target.value)}
      />
    );
  }

const HeaderComponent = () => {
    return (
      <>
        <SearchBar input={input} 
        />
      </>
     );
  }
  


export default HeaderComponent;

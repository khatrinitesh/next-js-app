import React from 'react'


const SplitNavigation = () => {
  return (
    <>
    <br/>
        <SplitNavFloat />
      <br />
      <SplitNavFlex /> 
    </>
  )
}

export default SplitNavigation

const SplitNavFloat = () => {
    return (
      <div>
        {`
        html {
            box-sizing: border-box;
          }

          *, *:before, *:after {
            box-sizing: inherit;
          }

          img {
            max-width: 100%;
            height: auto;
            vertical-align: middle;
          }

          body {
            padding: 6%;
          }

          .split-nav {
            list-style: none;
            margin: 0;
            padding: 0;
          }

          .split-nav--float {
            text-align: center;
          }

          .split-nav--float:after {
            display: block;
            content: " ";
            clear: both;
          }

          .split-nav--flex {
            display: flex;
            justify-content: space-between;
          }

          .split-nav--float > li {
            display: inline-block;
            float: left;
          }

          .split-nav--float > li:nth-child(4):nth-last-child(4) {
            float: none;
          }

          .split-nav--float > li:nth-child(4):nth-last-child(4) ~ li {
            float: right;
          }

          .split-nav--flex > li:nth-child(4):nth-last-child(4) {
            margin-left: auto;
            margin-right: auto;
          }

          .style {
            margin: 1em 0;
            background-color: coral;
          }

          .style a {
            display: inline-block;
            margin: 3px;
            padding: 6px 9px;
            text-decoration: none;
            background-color: aliceblue;
          }
        `}
        <br/>
        <strong>Floated</strong>
  
        <ul className="split-nav split-nav--float style">
          <li><a href="">Link 1</a></li>
          <li><a href="">Link 2</a></li>
          <li><a href="">Link 3</a></li>
          <li><a href="">Logo</a></li>
          <li><a href="">Link 5</a></li>
          <li><a href="">Link 6</a></li>
          <li><a href="">Link 7</a></li>
        </ul>
      </div>
    );
};
  
const SplitNavFlex = () => {
return (
    <>
    <strong>Flexbox</strong>
    <ul className="split-nav split-nav--flex style">
        <li><a href="">Link 1</a></li>
        <li><a href="">Link 2</a></li>
        <li><a href="">Link 3</a></li>
        <li><a href="">Logo</a></li>
        <li><a href="">Link 5</a></li>
        <li><a href="">Link 6</a></li>
        <li><a href="">Link 7</a></li>
    </ul>
    </>
);
};

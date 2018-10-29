import React from 'react';
import './Dropdown.css';
import { ColdObservable } from 'rxjs/internal/testing/ColdObservable';


class Dropdown extends React.Component {
constructor(){
 super();

 this.state = {
       displayMenu: false,
     };

  this.showDropdownMenu = this.showDropdownMenu.bind(this);
  this.hideDropdownMenu = this.hideDropdownMenu.bind(this);

};

showDropdownMenu(event) {
    event.preventDefault();
    this.setState({ displayMenu: true }, () => {
    document.addEventListener('click', this.hideDropdownMenu);
    });
  }

  hideDropdownMenu() {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener('click', this.hideDropdownMenu);
    });

  }
  goProfile() {
    localStorage.removeItem('token');
    
}

  render() {
    return (
      <div className=" w-100 " style = {{background:"#333"}}>
        <div  className="dropdown" style = {{backGround:"rgb(43, 41, 39)"}} >
         <div className="button" onClick={this.showDropdownMenu}>
         <svg aria-hidden="true" data-prefix="fal" data-icon="bars" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="svg-inline--fa fa-bars fa-w-14 fa-3x"><path fill="currentColor" d="M442 114H6a6 6 0 0 1-6-6V84a6 6 0 0 1 6-6h436a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6zm0 160H6a6 6 0 0 1-6-6v-24a6 6 0 0 1 6-6h436a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6zm0 160H6a6 6 0 0 1-6-6v-24a6 6 0 0 1 6-6h436a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6z" class=""></path>
         </svg>
         </div>

          { this.state.displayMenu ? (
          <ul>
         {/* <li><a className="active" href="#Create Page">Create Page</a></li> */}
         <li><a href="profile">Profile</a></li>       
         <li><a  href="/" onClick={this.goProfile.bind(this)}>Log Out</a></li>
          </ul>
        ):
        (
          null
        )
        }

       </div>
       </div>

    );
  }
}

export default Dropdown;
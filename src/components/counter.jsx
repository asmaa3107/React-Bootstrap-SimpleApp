// TODO: we gonna  use simple react extension to generate code using it's shortcuts
// TODO:  cc -imrc ...etc.
import React, { Component } from "react";
class Counter extends Component {
  //*Dynamic Controller and Data Here
  state = {
    count: 10
  };
  //*view Html Template Here
  render() {
    let classes = this.getBadgeClasses();

    return (
      <div class="jumbotron text-center">
        <div class="container  d-none">
          <h1 class="jumbotron-heading">E-COMMERCE CART</h1>
        </div>
        <div class="container mb-4  d-none">
          <div class="row">
            <div class="col-12">
              <div class="table-responsive">
                <table class="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col"> </th>
                      <th scope="col">Product</th>
                      <th scope="col">Available</th>
                      <th scope="col" class="text-center">
                        Quantity
                      </th>
                      <th scope="col" class="text-right">
                        Price
                      </th>
                      <th> </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <img src="https://dummyimage.com/50x50/55595c/fff" />{" "}
                      </td>
                      <td>Product Name Dada</td>
                      <td>In stock</td>
                      <td>
                        <input class="form-control" type="text" value="1" />
                      </td>
                      <td class="text-right">124,90 €</td>
                      <td class="text-right">
                        <button class="btn btn-sm btn-danger">
                          <i class="fa fa-trash" />{" "}
                        </button>{" "}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img src="https://dummyimage.com/50x50/55595c/fff" />{" "}
                      </td>
                      <td>Product Name Toto</td>
                      <td>In stock</td>
                      <td>
                        <input class="form-control" type="text" value="1" />
                      </td>
                      <td class="text-right">33,90 €</td>
                      <td class="text-right">
                        <button class="btn btn-sm btn-danger">
                          <i class="fa fa-trash" />{" "}
                        </button>{" "}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img src="https://dummyimage.com/50x50/55595c/fff" />{" "}
                      </td>
                      <td>Product Name Titi</td>
                      <td>In stock</td>
                      <td>
                        <input class="form-control" type="text" value="1" />
                      </td>
                      <td class="text-right">70,00 €</td>
                      <td class="text-right">
                        <button class="btn btn-sm btn-danger">
                          <i class="fa fa-trash" />{" "}
                        </button>{" "}
                      </td>
                    </tr>
                    <tr>
                      <td />
                      <td />
                      <td />
                      <td />
                      <td>Sub-Total</td>
                      <td class="text-right">255,90 €</td>
                    </tr>
                    <tr>
                      <td />
                      <td />
                      <td />
                      <td />
                      <td>Shipping</td>
                      <td class="text-right">6,90 €</td>
                    </tr>
                    <tr>
                      <td />
                      <td />
                      <td />
                      <td />
                      <td>
                        <strong>Total</strong>
                      </td>
                      <td class="text-right">
                        <strong>346,90 €</strong>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="col mb-2">
              <div class="row">
                <div class="col-sm-12  col-md-6">
                  <button class="btn btn-block btn-light">
                    Continue Shopping
                  </button>
                </div>
                <div class="col-sm-12 col-md-6 text-right">
                  <button class="btn btn-lg btn-block btn-success text-uppercase">
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          {/* Note -> use clasename not class becouse class in jsx is a reserved word  */}
          <span className={this.getBadgeClasses()}>{this.getval()}</span>
          <button type="button" className="btn btn-primary btn-sm">
            +
          </button>
        </div>
      </div>
    ); //!end of return function
  } //!end of rendering function

  // you can add custom functions and use it in render return method

  getBadgeClasses() {
    let classes = "m-2 p-2 badge badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  getval() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
} //* end of  class

export default Counter;

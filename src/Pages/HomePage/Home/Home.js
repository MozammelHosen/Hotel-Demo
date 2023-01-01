import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="flex justify-between items-center px-5 relative">
      <div className="form-control w-full ">
        <form>
          <h1 className="text-xl lg:text-3xl my-5 font-bold lg:text-center text-orange-500">
            Hotel Booking Now
          </h1>
          <h2 className="text-center text-xl  text-purple-500 mb-5">
            Hotel Booking Now
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            <div className="w-full">
              <label className="label">
                <span
                  style={{ fontSize: "15px" }}
                  className="text-xl text-black   font-bold"
                >
                  Gast Name :
                </span>
              </label>
              <input
                style={{ marginTop: "-10px" }}
                type="text"
                placeholder="Enter Gast Name.."
                className="w-full max-w-xs  outline outline-fuchsia-500 outline-1  py-2 px-5  rounded-md focus:ring-2 focus:ring-fuchsia-500"
                required
              />
            </div>
            <div className="w-full">
              <label className="label">
                <span
                  style={{ fontSize: "15px" }}
                  className="text-xl text-black   font-bold"
                >
                  Mobile Number :
                </span>
              </label>
              <input
                style={{ marginTop: "-10px" }}
                type="text"
                placeholder="Enter Mobile Number.."
                className="w-full max-w-xs  outline outline-fuchsia-500 outline-1  py-2 px-5  rounded-md focus:ring-2 focus:ring-fuchsia-500"
                required
              />
            </div>
            <div className="w-full">
              <label className="label">
                <span
                  style={{ fontSize: "15px" }}
                  className="text-xl text-black   font-bold"
                >
                  Check Box :
                </span>
              </label>
              <div
                style={{
                  marginTop: "-15px",
                }}
              >
                <input type="checkbox" name="check1" id="check5" />
                <label htmlFor="check5"> Single Room </label>
                <input type="checkbox" name="check2" id="check6" />
                <label htmlFor="check6"> Double Room</label> <br />
                <input type="checkbox" name="check1" id="check5" />
                <label htmlFor="check5"> Couple Room </label>
                <input type="checkbox" name="check2" id="check6" />
                <label htmlFor="check6"> Family Room</label>
              </div>
              {/* <input
                style={{ marginTop: "-10px" }}
                type="checkbox"
                // name="phone"
                value="single Room"
                // placeholder="Enter Phone Number.."
                className=""
                required
              /> */}
            </div>
            <div className="w-full">
              <label className="label">
                <span
                  style={{ fontSize: "15px" }}
                  className="text-xl text-black   font-bold"
                >
                  Total Amount :
                </span>
              </label>
              <input
                style={{ marginTop: "-10px" }}
                type="text"
                placeholder="Enter Amount.."
                className="w-full max-w-xs font-bold outline outline-fuchsia-500 outline-1  py-2 px-5  rounded-md focus:ring-2 focus:ring-fuchsia-500"
                required
              />
            </div>
            <div className="w-full" style={{ marginTop: "-30px" }}>
              <label className="label">
                <span
                  style={{ fontSize: "15px" }}
                  className="text-xl text-black   font-bold"
                >
                  Parents Name :
                </span>
              </label>
              <input
                style={{ marginTop: "-10px" }}
                type="text"
                placeholder="Enter Prarts Name.."
                className="w-full max-w-xs font-bold outline outline-fuchsia-500 outline-1  py-2 px-5  rounded-md focus:ring-2 focus:ring-fuchsia-500"
                required
              />
            </div>
            <div className="w-full" style={{ marginTop: "-30px" }}>
              <label className="label">
                <span
                  style={{ fontSize: "15px" }}
                  className="text-xl text-black   font-bold"
                >
                  Emergency Contact :
                </span>
              </label>
              <input
                style={{ marginTop: "-10px" }}
                type="text"
                placeholder="Enter Emergency Contact.."
                className="w-full max-w-xs font-bold outline outline-fuchsia-500 outline-1  py-2 px-5  rounded-md focus:ring-2 focus:ring-fuchsia-500"
                required
              />
            </div>
            <div className="w-full" style={{ marginTop: "-30px" }}>
              <label className="label">
                <span
                  style={{ fontSize: "15px" }}
                  className="text-xl text-black   font-bold"
                >
                  Advanced Payment :
                </span>
              </label>
              <input
                style={{ marginTop: "-10px" }}
                type="text"
                placeholder="Enter Total Payment.."
                className="w-full max-w-xs font-bold outline outline-fuchsia-500 outline-1  py-2 px-5  rounded-md focus:ring-2 focus:ring-fuchsia-500"
                required
              />
            </div>
            <div className="w-full" style={{ marginTop: "-30px" }}>
              <label className="label">
                <span
                  style={{ fontSize: "15px" }}
                  className="text-xl text-black   font-bold"
                >
                  Due Amount :
                </span>
              </label>
              <input
                style={{ marginTop: "-10px" }}
                type="text"
                placeholder="Enter Due Amount.."
                className="w-full max-w-xs font-bold outline outline-fuchsia-500 outline-1  py-2 px-5  rounded-md focus:ring-2 focus:ring-fuchsia-500"
                required
              />
            </div>
            <div className="w-full" style={{ marginTop: "-30px" }}>
              <label className="label">
                <span
                  style={{ fontSize: "15px" }}
                  className="text-xl text-black   font-bold"
                >
                  NID Number :
                </span>
              </label>
              <input
                style={{ marginTop: "-10px" }}
                type="text"
                placeholder="Enter NID Number.."
                className="w-full max-w-xs font-bold outline outline-fuchsia-500 outline-1  py-2 px-5  rounded-md focus:ring-2 focus:ring-fuchsia-500"
                required
              />
            </div>
            <div className="w-full" style={{ marginTop: "-30px" }}>
              <label className="label">
                <span
                  style={{ fontSize: "15px" }}
                  className="text-xl text-black   font-bold"
                >
                  Address :
                </span>
              </label>
              <input
                style={{ marginTop: "-10px" }}
                type="text"
                placeholder="Enter Address Name.."
                className="w-full max-w-xs font-bold outline outline-fuchsia-500 outline-1  py-2 px-5  rounded-md focus:ring-2 focus:ring-fuchsia-500"
                required
              />
            </div>
            <div className="w-full" style={{ marginTop: "-30px" }}>
              <label className="label">
                <span
                  style={{ fontSize: "15px" }}
                  className="text-xl text-black   font-bold"
                >
                  Customer Status :
                </span>
              </label>
              <div
                style={{
                  marginTop: "-15px",
                }}
              >
                <input type="checkbox" name="" id="" />
                <label htmlFor=""> Non-Copotate</label> <br />
                <input type="checkbox" name="" id="" />
                <label htmlFor=""> Copotate</label>
              </div>
            </div>
            <div className="w-full" style={{ marginTop: "-30px" }}>
              <label className="label">
                <span
                  style={{ fontSize: "15px" }}
                  className="text-xl text-black   font-bold"
                >
                  Nationatity :
                </span>
              </label>
              {/* <select name="" id="">
              <option value="">Hello</option>
              <option value="">Hello</option>
             </select> */}
              <select
                name=""
                id=""
                className="w-full max-w-xs font-bold outline outline-fuchsia-500 outline-1  py-2 px-5  rounded-md focus:ring-2 focus:ring-fuchsia-500"
              >
                <option value="">Bangladesh</option>
                <option value="">India</option>
                <option value="">Afa</option>
                <option value="">Afa</option>
                <option value="">Afa</option>
                <option value="">Afa</option>
                <option value="">Afa</option>
                <option value="">Afa</option>
                <option value="">Afa</option>
                <option value="">Afa</option>
                <option value="">Afa</option>
                <option value="">Afa</option>
                <option value="">Afa</option>
                <option value="">Afa</option>
                <option value="">Afa</option>
                <option value="">Afa</option>
                <option value="">Afa</option>
                <option value="">Afa</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-4 mt-5">
            <div className="w-full" style={{ marginTop: "-30px" }}>
              <label className="label">
                <span
                  style={{ fontSize: "15px" }}
                  className="text-xl text-black   font-bold"
                >
                  Total Gast :
                </span>
              </label>
              <input
                style={{ marginTop: "-10px", width: "290px" }}
                type="text"
                placeholder="Enter Total Gast.."
                className="w-full max-w-xs font-bold outline outline-fuchsia-500 outline-1  py-2 px-5  rounded-md focus:ring-2 focus:ring-fuchsia-500"
                required
              />
            </div>
            <div className="w-full" style={{ marginTop: "-30px" }}>
              <label className="label">
                <span
                  style={{ fontSize: "15px" }}
                  className="text-xl text-black   font-bold"
                >
                  Total Room :
                </span>
              </label>
              <input
                style={{ marginTop: "-10px", width:"290px" }}
                type="text"
                placeholder="Enter Total Room.."
                className="w-full max-w-xs font-bold outline outline-fuchsia-500 outline-1  py-2 px-5  rounded-md focus:ring-2 focus:ring-fuchsia-500"
                required
              />
            </div>
            <div style={{
              marginTop: "-20px",
            }}>
              <label htmlFor="" className="font-bold">Textarea :</label> <br />
              <textarea style={{ marginTop: "-1px", width:"680px" }} 
                className="textarea outline outline-1 outline-fuchsia-500 rounded-md focus:ring-2 focus:ring-pink-500  w-full max-w-md textarea-primary mt-3"
                name=""
                id=""
                cols="40"
                rows=""
              ></textarea>
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div className="lg:text-center lg:mt-4">
              <h1
                style={{ fontSize: "15px" }}
                className="text-xl text-black   w-full font-bold "
              >
                Room Booking Date :
              </h1>
              <input
                style={{ marginTop: "-3px" }}
                className="font-bold  outline-fuchsia-500 py-2 px-5  rounded-md  focus:ring-pink-500 bg-fuchsia-500 text-white"
                type="date"
                name="date"
                required
              />
            </div>
            <div className="lg:text-center lg:mt-4">
              <h1
                style={{ fontSize: "15px" }}
                className="text-xl text-black   w-full font-bold "
              >
                Room Log Out Date :
              </h1>
              <input
                style={{ marginTop: "-3px" }}
                className="font-bold  outline-fuchsia-500 py-2 px-5  rounded-md  focus:ring-pink-500 bg-fuchsia-500 text-white"
                type="date"
                name="date"
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-10  gap-5 mt-10 ">
            <div
              style={{
                padding: "50px",
              }}
              className="m-auto h-20 w-20 rounded-md "
              id="color1"
            >
              <h1 className="text-white">101</h1>
            </div>
            <div
              style={{
                padding: "50px",
              }}
              className=" h-20 w-20 rounded-md "
              id="color1"
            >
              <h1 className=" text-white">102</h1>
            </div>
            <div
              style={{
                padding: "50px",
              }}
              className=" h-20 w-20 rounded-md "
              id="color1"
            >
              <h1 className=" text-white">103</h1>
            </div>
            <div
              style={{
                padding: "50px",
              }}
              className=" h-20 w-20 rounded-md "
              id="color1"
            >
              <h1 className="text-center text-white">104</h1>
            </div>
            <div
              style={{
                padding: "50px",
              }}
              className=" h-20 w-20 rounded-md "
              id="color1"
            >
              <h1 className="text-center text-white">105</h1>
            </div>
            <div
              style={{
                padding: "50px",
              }}
              className=" h-20 w-20 rounded-md "
              id="color1"
            >
              <h1 className="text-center text-white">106</h1>
            </div>
            <div
              style={{
                padding: "50px",
              }}
              className=" h-20 w-20 rounded-md "
              id="color1"
            >
              <h1 className="text-center text-white">107</h1>
            </div>
            <div
              style={{
                padding: "50px",
              }}
              className=" h-20 w-20 rounded-md "
              id="color1"
            >
              <h1 className="flex justify-center items-center text-white">
                108
              </h1>
            </div>
            <div
              style={{
                padding: "50px",
              }}
              className=" h-20 w-20 rounded-md "
              id="color1"
            >
              <h1 className="flex justify-center items-center text-white">
                109
              </h1>
            </div>
            <div
              style={{
                padding: "50px",
              }}
              className=" h-20 w-20 rounded-md "
              id="color1"
            >
              <h1 className="flex justify-center items-center text-white">
                110
              </h1>
            </div>
          </div>
          <div className="card-actions justify-center">
            <button
              className="btn mt-10 w-full max-w-xs hover:text-black bg-gradient-to-r from-fuchsia-500 via-purple-800 to-pink-500 text-white"
              type="submit"
            >
              Confirm Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Home;

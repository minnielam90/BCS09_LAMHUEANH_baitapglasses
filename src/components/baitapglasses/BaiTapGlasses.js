import React, { Component } from "react";

export default class BaiTapGlasses extends Component {
  state = {
    selectedGlass: null,
  };
  render() {
    const arrGlasses = [
      {
        id: 1,
        price: 30,
        name: "GUCCI G8850U",
        url: "./image/v1.png",
        desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
      },
      {
        id: 2,
        price: 50,
        name: "GUCCI G8759H",
        url: "./image/v2.png",
        desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
      },
      {
        id: 3,
        price: 30,
        name: "DIOR D6700HQ",
        url: "./image/v3.png",
        desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
      },
      {
        id: 4,
        price: 70,
        name: "DIOR D6005U",
        url: "./image/v4.png",
        desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
      },
      {
        id: 5,
        price: 40,
        name: "PRADA P8750",
        url: "./image/v5.png",
        desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
      },
      {
        id: 6,
        price: 60,
        name: "PRADA P9700",
        url: "./image/v6.png",
        desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
      },
      {
        id: 7,
        price: 80,
        name: "FENDI F8750",
        url: "./image/v7.png",
        desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
      },
      {
        id: 8,
        price: 100,
        name: "FENDI F8500",
        url: "./image/v8.png",
        desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
      },
      {
        id: 9,
        price: 60,
        name: "FENDI F4300",
        url: "./image/v9.png",
        desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
      },
    ];

    const backgroundStyle = {
      backgroundImage: `url('./image/background1.jpg')`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "1200px",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      position: "relative",
    };

    const h2Style = {
      position: "relative",
      zIndex: 2,
      color: "#fff",
    };

    const overlayStyle = {
      position: "absolute",
      top: "4%", // Adjust the position as needed
      left: "50%", // Adjust the position as needed
      transform: "translate(-50%, -50%)",
      zIndex: 1,
      background: "rgba(0, 0, 0, 0.5)", // Adjust the overlay color and opacity
      width: "100%", // Make the overlay full width
    };

    const modelImages = Array.from({ length: 2 }).map((_, index) => {
      const isLeftModel = index === 0;
      const isSelectedGlass = this.state.selectedGlass !== null;
      const glassPosition = isLeftModel ? "left" : "right";

      return (
        <div
          key={index}
          className={`col-3 text-center ${isLeftModel ? "pr-6" : "pl-6"}`}
          style={{ position: "relative" }}
        >
          <img
            src="./image/model.jpg"
            alt={`Model ${index + 1}`}
            style={{
              width: "100%",
              maxWidth: "400px",
              borderRadius: "5px",
              marginBottom: "40px",
              border: isSelectedGlass ? "3px solid #ffcc00" : "none",
            }}
          />
          {isSelectedGlass && (
            <div>
              {isLeftModel ? (
                <div
                  style={{
                    position: "absolute",
                    top: "80%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    zIndex: 2,
                    background: "rgba(255, 165, 0, 0.7)",
                    padding: "15px",
                    borderRadius: "5px",
                    width: "92%",
                    padding: "0",
                  }}
                >
                  <p
                    style={{
                      color: "#800080", // Purple color font
                      fontSize: "14px",
                      marginBottom: "0px",
                    }}
                  >
                    <strong>{this.state.selectedGlass.name}</strong>
                  </p>
                  <p
                    style={{
                      color: "#ffffff", // White color font
                      fontSize: "14px",
                      marginBottom: "0px",
                    }}
                  >
                    {this.state.selectedGlass.desc}
                  </p>
                  <p
                    style={{
                      color: "black", // White color font
                      fontSize: "13px",
                      fontWeight: "500",
                      marginBottom: "0px",
                    }}
                  >
                    Price: ${this.state.selectedGlass.price}
                  </p>
                </div>
              ) : (
                <img
                  src={this.state.selectedGlass.url}
                  alt="Selected Glass"
                  style={{
                    position: "absolute",
                    justifyContent: "center",
                    width: "100%",
                    maxWidth: "155px",
                    top: "29%",
                    [glassPosition]: "3%",
                    transform: "translate(-50%, -50%)",
                    zIndex: 2,
                    opacity: 0.7,
                  }}
                />
              )}
            </div>
          )}
        </div>
      );
    });

    const glassesList = arrGlasses.map((glass) => (
      <div
        key={glass.id}
        className="col-2 text-center mx-auto"
        style={{ cursor: "pointer" }}
        onClick={() => {
          // Check if the clicked glass should be applied to the right model
          if (
            this.state.selectedGlass === null ||
            this.state.selectedGlass.id !== glass.id
          ) {
            // Update the selected glass
            this.setState({ selectedGlass: { ...glass } });
          }
        }}
      >
        <img
          src={glass.url}
          alt={glass.name}
          style={{
            width: "100%",
            maxWidth: "150px",
            borderRadius: "5px",
            marginBottom: "20px",
            border:
              this.state.selectedGlass === glass ? "3px solid #ffcc00" : "none",
          }}
        />
        <p style={{ color: "black" }}>{glass.name}</p>
      </div>
    ));

    return (
      <div className="baitap_glasses" style={backgroundStyle}>
        <div className="container">
          <div style={overlayStyle}>
            <h2 className="py-2 text-center" style={h2Style}>
              TRY GLASSES APP ONLINE
            </h2>
          </div>

          <div
            className="row justify-content-center align-items-center"
            style={{ paddingTop: "100px" }}
          >
            {modelImages}
          </div>

          <div className="row justify-content-center">
            <div className="d-flex flex-wrap justify-content-center">
              {glassesList}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

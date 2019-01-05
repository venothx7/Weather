import React from "react";

class Weather extends React.Component {
  render() {
    return (
      <div>
        <br />
        {this.props.city && this.props.country && (
          <h4>
            Location: {this.props.city}, {this.props.country}
          </h4>
        )}

        {this.props.temperature && (
          <h4>Temperature: {this.props.temperature}</h4>
        )}

        {this.props.humidity && <h4> Humidty: {this.props.humidity}</h4>}

        {this.props.description && (
          <h4>Description: {this.props.description}</h4>
        )}

        {this.props.error && (
          <h4>
            <br />
            <div className="alert alert-danger" role="alert">
              {this.props.error}{" "}
            </div>
          </h4>
        )}
      </div>
    );
  }
}
export default Weather;

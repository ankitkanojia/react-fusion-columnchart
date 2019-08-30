import React, {Component} from 'react';

// import Fusion Charts library
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import './index.css';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

// import bootstrap css
import 'bootstrap/dist/css/bootstrap.css';

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

// column 3d chart configuration settings
const chartConfigs_colunm2d = {
    type: 'column2d',
    width: '100%',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "theme": "fusion",
            "palettecolors": "5d62b5,29c3be,f2726f",
            "caption": "Average Annual Population Growth",
            "subcaption": ' 1955-2015',
            "xAxisName": "Population",
            "yAxisName": "Growth",
            "numberSuffix": "K",
            "showBorder": "1",
            "borderColor": "#ccc",
            "bgColor": "#FFFFFF",
            //Tooltip customization
            "toolTipBorderColor": "#666666",
            "toolTipBgColor": "#efefef",
            "toolTipBgAlpha": "80",
            "showToolTipShadow": "1",
            //Theme
            "plotBorderThickness": "0.25",
            "showxaxispercentvalues": "1",
            "showValues": "1",
            "plotToolText": "Country: $label <br> Population : $dataValue"
        },
        "data": [
            {
                "label": "China",
                "value": "300"
            },
            {
                "label": "US",
                "value": "200"
            },
            {
                "label": "Russia",
                "value": "130"
            },
            {
                "label": "Canada",
                "value": "80"
            },
            {
                "label": "Iran",
                "value": "130"
            },
            {
                "label": "UAE",
                "value": "70"
            },
            {
                "label": "Saudi",
                "value": "50"
            },
            {
                "label": "India",
                "value": "140"
            }
        ]
    },
};

// column 3d chart configuration settings
const chartConfigs_colunm3d = {
    type: 'column3d',
    width: '100%',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "theme": "fusion",
            "palettecolors": "5d62b5,29c3be,f2726f",
            "caption": "Average Annual Population Growth",
            "subcaption": ' 1955-2015',
            "xAxisName": "Population",
            "yAxisName": "Growth",
            "numberSuffix": "K",
            "showBorder": "1",
            "borderColor": "#ccc",
            "bgColor": "#FFFFFF",
            //Tooltip customization
            "toolTipBorderColor": "#666666",
            "toolTipBgColor": "#efefef",
            "toolTipBgAlpha": "80",
            "showToolTipShadow": "1",
            //Theme
            "plotBorderThickness": "0.25",
            "showxaxispercentvalues": "1",
            "showValues": "1",
            "placeValuesInside": "1",
            "plotToolText": "Country: $label <br> Population : $dataValue"
        },
        "data": [
            {
                "label": "China",
                "value": "300"
            },
            {
                "label": "US",
                "value": "200"
            },
            {
                "label": "Russia",
                "value": "130"
            },
            {
                "label": "Canada",
                "value": "80"
            },
            {
                "label": "Iran",
                "value": "130"
            },
            {
                "label": "UAE",
                "value": "70"
            },
            {
                "label": "Saudi",
                "value": "50"
            },
            {
                "label": "India",
                "value": "140"
            }
        ]
    },
};

class App extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    {/*Column 2D section*/}
                    <div className="col-sm-6">
                        <h3>Column 2D Chart</h3>
                        <ReactFC {...chartConfigs_colunm2d} />
                    </div>

                    {/*Column 3D section*/}
                    <div className="col-sm-6">
                        <h3>Column 3D Chart</h3>
                        <ReactFC {...chartConfigs_colunm3d} />
                    </div>

                </div>
            </div>)
    }
}

export default App;

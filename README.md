# Implement column(2D & 3D) Fusion chart with react app
FusionCharts is a JavaScript charting library which provides more than 95 charts and 2,000 maps which can be use full in mobile and web applications.

## Official Links
  - Website: [https://www.fusioncharts.com](https://www.fusioncharts.com)
  - NPM Package: [https://www.npmjs.com/package/fusioncharts](https://www.npmjs.com/package/fusioncharts)

## Getting Started

**Note:** [NPM](https://www.npmjs.com) or [Yarn](https://yarnpkg.com/lang/en) must be installed globally on your local pc.
 - See [npm documentation](https://docs.npmjs.com/) to know more about npm in detail.
 - See [yarn documentation](https://yarnpkg.com/en/docs) to know more about yarn in detail.
 
## Installation Fusion Chart Library

[Note](#): In demo for designing purpose we used the simple [bootstrap](https://www.npmjs.com/package/bootstrap) library.
 
We will use `react-fusioncharts` component to integrate fusion chart functionality.

**Install from NPM or from Yarn**
 ```
npm install --save react-fusioncharts

or

yarn add react-fusioncharts
```

### Usage

- create react app using your specific app name in desire folder path `create-react-app`
- once you create the react app successfully there will be `app.js` file lies in `src` folder.
- now we need to import `react-fusioncharts` and FusionCharts in your `app.js` file

```
import React, {Component} from 'react';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import './index.css';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);
```

Note: This way of import will not work in IE11 and below.

#### Configuration setting for chart

```
    type: 'column2d',
    width: '100%',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            //Basic parameters
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
        "data": [] //data collection
    },
```

#### Data Source Collection

```
    "data": [{
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
```

This sample static data collection need to pass in configuration setting. 

#### Attach the callback to an event through the React-FC component:

```javascript
 <ReactFC {...chartConfigsSettings} /> 
```

##### Consider the example to integrate or implement fusion chart in the react app.

```javascript
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
```

## Licensing

The FusionCharts React component is open-source and distributed under the terms of the MIT/X11 License. However, you will need to download and include FusionCharts library in your page separately, which has a [separate license](https://www.fusioncharts.com/buy).

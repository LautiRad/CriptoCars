import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import ProductInfo from "./ProductInfo";
import styles from '../../styles/CarDetails.module.css'

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box className={styles.productBoxBody}>
                    <div>{children}</div>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function ProductTab({properties}) {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box className={styles.productBox}>
            <Box className={styles.productBoxHeader}>
                <Tabs value={value} onChange={handleChange} variant="scrollable" allowScrollButtonsMobile>
                    <Tab className={styles.productTab} label="Información General" {...a11yProps(0)} />
                    <Tab className={styles.productTab} label="Rendimiento y dimensiones" {...a11yProps(1)} />
                    <Tab className={styles.productTab} label="Seguridad" {...a11yProps(2)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <ProductInfo properties={properties}/>
            </TabPanel>
            <TabPanel value={value} index={1}>
                Item Two
            </TabPanel>
            <TabPanel value={value} index={2}>
                Item Three
            </TabPanel>
        </Box>
    );
}
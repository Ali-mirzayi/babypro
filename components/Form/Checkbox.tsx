import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Box from "@mui/material/Box";
import styles from './Checkbox.module.css';

function Checkboxs({ useCheck }: any) {
    const [checked, setChecked] = useCheck;

const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([event.target.checked, event.target.checked, event.target.checked, event.target.checked, event.target.checked]);
};

const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([event.target.checked, checked[1], checked[2], checked[3], checked[4]]);
};

const handleChange3 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([checked[0], event.target.checked, checked[2], checked[3], checked[4]]);
};

const handleChange4 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([checked[0], checked[1], event.target.checked, checked[3], checked[4]]);
};

const handleChange5 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([checked[0], checked[1], checked[2], event.target.checked, checked[4]]);
};

const handleChange6 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([checked[0], checked[1], checked[2],checked[3], event.target.checked]);
};

    return (<div>
        <FormControlLabel
            label="همه"
            control={
                <Checkbox
                    checked={checked[0] && checked[1] && checked[2] && checked[3] && checked[4]}
                    indeterminate={checked[0] || checked[1] || checked[2] || checked[3] || checked[4]}
                    onChange={handleChange1}
                />
            }
        />
        <Box className={styles.container} sx={{display: 'grid'}}>
            <FormControlLabel
                label="نمونه برداری"
                control={<Checkbox checked={checked[0]} onChange={handleChange2} />}
            />
            <FormControlLabel
                label="نظارت بر نشانه گذاری"
                control={<Checkbox checked={checked[1]} onChange={handleChange3} />}
            />
            <FormControlLabel
                label="گواهی بازرسی"
                control={<Checkbox checked={checked[2]} onChange={handleChange4} />}
            />
            <FormControlLabel
                label="گواهی کیفی کالا "
                control={<Checkbox checked={checked[3]} onChange={handleChange5} />}
            />
            <FormControlLabel
                label="سایر گواهی"
                control={<Checkbox checked={checked[4]} onChange={handleChange6} />}
            />
        </Box>
    </div>);
}

export default Checkboxs;

// const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setChecked([event.target.checked, event.target.checked, event.target.checked, event.target.checked]);
// };

// const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setChecked([event.target.checked, checked[1], checked[2], checked[3], checked[4]]);
// };

// const handleChange3 = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setChecked([checked[0], event.target.checked, checked[2], checked[3], checked[4]]);
// };

// const handleChange4 = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setChecked([checked[0], checked[1], event.target.checked, checked[3], checked[4]]);
// };

// const handleChange5 = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setChecked([checked[0], checked[1], checked[2], event.target.checked, checked[4]]);
// };

// const handleChange6 = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setChecked([checked[0], checked[1], checked[2],checked[3], event.target.checked]);
// };
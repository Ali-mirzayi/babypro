import Paper from "@mui/material/Paper";
import styles from "../styles/Dashboards/AdminDashboard.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

function Dashboard() {
    const router = useRouter();
    return (<div className={styles.container}>
        <Paper className={styles.box}><div className={styles.overlay}><Link href="#"><h2>عملیات بازرسی</h2></Link></div><h2>عملیات بازرسی</h2></Paper>
        <Paper className={styles.box}><div className={styles.overlay}><Link href="#"><h2>کیفیت استاندار ها</h2></Link></div><h2>کیفیت استاندار ها</h2></Paper>
        <Paper className={styles.box}><div className={styles.overlay}><Link href="#"><h2>مالی</h2></Link></div><h2> مالی</h2></Paper>
        <Paper className={styles.box}><div className={styles.overlay}><Link href="#"><h2>rnd</h2></Link></div><h2>rnd</h2></Paper>
        <Paper className={styles.box}><div className={styles.overlay}><Link href="#"><h2>نیروی انسانی</h2></Link></div><h2>نیروی انسانی</h2></Paper>
        <Paper className={styles.box}><div className={styles.overlay}><Link href="#"><h2>گزارش کیفیت</h2></Link></div><h2>گزارش کیفیت</h2></Paper>
    </div>);
}

export default Dashboard;
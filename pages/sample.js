import React from 'react';

import styles from '../styles/sample.module.css'

export default function index({
    title
}) {

    return <h1 className={styles.heading}>{title}</h1>;
}

export async function getStaticProps(context) {

    let data = await fetch('http://localhost:3000/data.json');
    data = await data.json();

    return {
        props: {
            title: data.data.title
        }, // will be passed to the page component as props
        // revalidate: 10, // In seconds
    }
}

// export async function getServerSideProps(context) {

//     let data = await fetch('http://localhost:3000/data.json');
//     data = await data.json();

//     return {
//         props: {
//             title: data.data.title
//         }, // will be passed to the page component as props
//     }
// }

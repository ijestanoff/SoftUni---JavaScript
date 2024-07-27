
import { useFetch } from '../hooks/useFetch';

import ArticleCard from './ArticleCard';
import styles from '../App.module.css';

import Button from 'react-bootstrap/Button';
import MySpinner from './Spinner';

export default function ArticleList() {
    const {
        data: articles,
        isFetching,
        refetch,
    } = useFetch('http://localhost:3030/jsonstore/advanced/articles/list', []);

    return (
        <>
            {isFetching
                ? <MySpinner />
                : (<div className={styles['article-list']}>
                    {articles.map(article => <ArticleCard key={article._id} {...article} />)}
                </div>
                )
            }

            <Button variant="primary" onClick={refetch}>Refresh</Button>
        </>
    );
}
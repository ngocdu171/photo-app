import { Button, Container } from 'reactstrap'
import React from 'react'
import Header from '../components/Header'
import PostList from '../components/PostList'
import Post from '../components/PostList/Post'

export default function HomePage() {
    return (
        <Container>
            <Header />
            <PostList />
            <Post />
        </Container>
    )
}

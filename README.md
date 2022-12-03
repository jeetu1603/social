**auth Route**
| Endpoint | Method | Description |
|---------------------|--------|---------------|
| /api/auth/register | POST | create a user |
| /api/auth/login | POST | login a user |
| /api/auth/logout | POST | logout a user |

**users Route**
| Endpoint | Method | Description |
|-------------------------|--------|---------------|
| /api/users/find/:userId | GET | find a user |
| /api/users/ | PUT | update a user |

**posts Route**
| Endpoint | Method | Description |
|--------------------------------------|--------|-------------------------------------------|
| /api/posts/<br> /api/posts?userId=[] | GET | get timeline posts<br> get a user's posts |
| /api/posts/ | POST | create a post |
| /api/posts/:postId | DELETE | delete a post |

**likes Route**
| Endpoint | Method | Description |
|----------------------|--------|---------------------|
| /api/likes?postId=[] | GET | get likes of a post |
| /api/likes/ | POST | like a post |
| /api/likes?postId=[] | DELETE | delete a post |

**comments Route**
| Endpoint | Method | Description |
|-------------------------|--------|------------------------|
| /api/comments?postId=[] | GET | get comments of a post |
| /api/comments/ | POST | create a comment |

**relationships Route**
| Endpoint | Method | Description |
|--------------------------------------|--------|-----------------|
| /api/relationships?followedUserId=[] | GET | |
| /api/relationships/ | POST | follow a user |
| /api/relationships?userId=[] | DELETE | unfollow a user |

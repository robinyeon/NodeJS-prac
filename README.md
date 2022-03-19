# Youtube-clone

## Design domains of our project

- **라우터**: 작업중인 주제를 기반으로 URL을 그룹화 해준다.

1. Users
2. Videos

### Global Router

Root url => /
/ => Home
/users/join => /join
/users/login => /login
/videos/search => /search

### User Router

Root url => /users
/users/:id => See user profile
/users/logout => Log Out
/users/edit => Edit MY profile
/users/delete => Delete MY profile

### Video Router

Root url => /videos
/videos/:id => See video
/videos/upload => Upload video
/videos/:id/edit => Edit video
/videos/:id/delete => Delete video

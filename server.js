const express = require('express')
const app = express()
const path = require('path')
const mongoose = require('mongoose');
const mongodb = require('mongodb');
const cors = require('cors');


// 모든 Origin에서의 요청을 허용하려면 다음과 같이 설정합니다.

/*----------------------------------------------------*/
app.use(cors());

app.listen(3000, function(){
    console.log('listening on 8080')
})
app.use(express.static(path.join(__dirname,'expo/build')));
app.get('/', function(req,res){
    res.sendFile(path.join(__dirname,'expo/build/index.html') );
    res.header("Access-Control-Allow-Origin", "*");
})
app.get('/professor', function(req,res){
  res.sendFile(path.join(__dirname,'expo/build/index.html') );
  res.header("Access-Control-Allow-Origin", "*");
})
app.get('/introduce', function(req,res){
  res.sendFile(path.join(__dirname,'expo/build/index.html') );
  res.header("Access-Control-Allow-Origin", "*");
})
app.get('/projects', function(req,res){
  res.sendFile(path.join(__dirname,'expo/build/index.html') );
  res.header("Access-Control-Allow-Origin", "*");
})
app.get('/developers', function(req,res){
  res.sendFile(path.join(__dirname,'expo/build/index.html') );
  res.header("Access-Control-Allow-Origin", "*");
})
app.get('/REBIT', function(req,res){
  res.sendFile(path.join(__dirname,'expo/build/index.html') );
  res.header("Access-Control-Allow-Origin", "*");
})
app.get('/PUPPYWATCH', function(req,res){
  res.sendFile(path.join(__dirname,'expo/build/index.html') );
  res.header("Access-Control-Allow-Origin", "*");
})
app.get('/AIKIOSK', function(req,res){
  res.sendFile(path.join(__dirname,'expo/build/index.html') );
  res.header("Access-Control-Allow-Origin", "*");
})
app.get('/FULLHOUSEMALL', function(req,res){
  res.sendFile(path.join(__dirname,'expo/build/index.html') );
  res.header("Access-Control-Allow-Origin", "*");
})
//라우팅
app.get('/ADMIN', function(req,res){
  res.sendFile(path.join(__dirname,'expo/build/index.html') );
  res.header("Access-Control-Allow-Origin", "*");
})
app.get('/URECAR', function(req,res){
  res.sendFile(path.join(__dirname,'expo/build/index.html') );
  res.header("Access-Control-Allow-Origin", "*");
})
app.get('/BBANGYA', function(req,res){
  res.sendFile(path.join(__dirname,'expo/build/index.html') );
  res.header("Access-Control-Allow-Origin", "*");
})
app.get('/guestbook', function(req,res){
    res.sendFile(path.join(__dirname,'expo/build/index.html'))
})



exports.mongoDB=()=>{
    mongoose.connect('mongodb+srv://haein:haein6893@atlascluster.5ribwrk.mongodb.net/').then(()=>
    console.log('connected')).catch(()=>console.log('failed'));
}


const mongoURL = 'mongodb+srv://haein:haein6893@atlascluster.5ribwrk.mongodb.net/';
const dbName = 'erd';
const collectionName = 'project';


// MongoDB 연결 함수
async function connectMongoDB() {
  try {
    const client = await mongodb.MongoClient.connect(mongoURL, {

    });
    console.log('connect')
    return client.db(dbName).collection(collectionName);
    
  } catch (error) {
    console.error('Error connecting to the database:', error);
    throw error;
  }
}
/*--------------------------------------------------------------*/

// JSON 형식의 요청 바디를 파싱하는 미들웨어

app.use(express.json());

app.use(express.urlencoded({ extended: true })); // URL-encoded 형식의 요청 바디를 파싱하는 미들웨어

   // 프로젝트 생성 API 엔드포인트 (일종의 프로젝트 아이디 생성...?)
   app.post('/projects', async (req, res) => {
    try {
    let {comments,view,likes } = req.body;
    const projectsCollection = await connectMongoDB();

    //MongoDB에 프로젝트 정보 저장
    const result = await projectsCollection.insertOne({
        comments: []
        ,view:0
        ,likes:0
    
    });
    
    res.status(201).json({ success: true, projectId: result.insertedId });

    } catch (error) {

    console.error('Error creating project:', error);

    res.status(500).json({ success: false, error: 'Failed to create project' });

    }

});




//댓글 작성하는 api
app.post('/projects/:projectId/comments', async (req, res) => {
    try {
      const projectId = req.params.projectId;
      const { createBy, password, phone, check_agree, content, createDate } = req.body;
      console.log("프로젝트 아이디는"+projectId)
  
      // 프로젝트 ID가 유효한지 확인
      // (생략: 프로젝트 ID가 유효하지 않으면 404 Not Found 응답을 반환)
  
      const projectCollection = await connectMongoDB();
  
      // 댓글 객체 생성
      const comment = {
        commentId: generateCommentId(),
        createBy,
        password,
        phone,
        check_agree,
        content,
        createDate: new Date(),
      };

      console.log(new mongodb.ObjectId(projectId))

      console.log(comment)

   
      // MongoDB에 댓글 정보 추가
      const result = await projectCollection.updateOne(

        { _id: new mongodb.ObjectId(projectId) },
        { $push: { comments: comment } }

        

      );
  
      if (result.matchedCount === 0) {
        // 업데이트된 문서가 없으면 프로젝트가 없음을 의미
        return res.status(404).json({ message: 'Project not found' });
      }
      res.status(201).json({ success: true, commentId: comment._id });
    } catch (error) {

      console.error('Error adding comment:', error);
      res.status(500).json({ success: false, error: 'Failed to add comment' });

    }


  });


  

  const crypto = require('crypto'); 

// 랜덤한 문자열로 commentId 생성하는 함수

function generateCommentId() {
    return crypto.randomBytes(8).toString('hex');
  }
  

 /* --------------------------댓글 가져오기------------------------- */
  app.get('/projects/:projectId/comments', async (req, res) => {
    try {

      const projectId = req.params.projectId;

      const projectCollection = await connectMongoDB();
  
      // 프로젝트 조회
      const project = await projectCollection.findOne({ _id: new mongodb.ObjectId(projectId) });
  
      if (!project) {

        return res.status(404).json({ message: 'Project not found' });

      }
  
      // 해당 프로젝트의 전체 댓글 조회
      const comments = project.comments;
      console.log("comments 는 "+comments[0].createBy.toString())
      console.log(res.json(comments));

    } catch (error) {

      console.error('Error retrieving comments:', error);

      res.status(500).json({ message: 'Internal server error' });

    }

  });


  /* --------------------------댓글 삭제하기------------------------- */

  app.delete('/projects/:projectId/comments/:commentId', async (req, res) => {
    const projectId = req.params.projectId;
    const commentId = req.params.commentId;
    const {password, phone} = req.body;
  
    const projectsCollection = await connectMongoDB();
  
    // 프로젝트 조회
    const project = await projectsCollection.findOne({ _id: new mongodb.ObjectId(projectId) });
  
    if (!project) {
    return res.status(404).json({ message: 'Project not found' });
    }
  
    try {
    // 댓글 조회 및 삭제
    const comments = project.comments;
    const commentIndex = comments.findIndex((comment) => (
      comment.commentId === commentId &&
      comment.phone === phone &&
      comment.password === password
    ));
    
    if (commentIndex === -1) {
      return res.status(404).json({ message: 'Unauthorized to update the comment' });
    }
  
    comments.splice(commentIndex, 1);
    
    // 수정된 프로젝트 업데이트
    await projectsCollection.updateOne(
      { _id: new mongodb.ObjectId(projectId) },
      { $set: { comments: comments } }
    );
  
      return res.status(200).json({ message: 'Delete the comment successfully'});
    } catch (error) {
      console.error("댓글 삭제 중 오류 발생 : ", error);
      return res.status(500).json({ message: 'Failed to delete the comment'})
    }
  });


  //-----------------------------------------------------------------------------------
//각 댓글 비밀번호, 연락처 가져와서 댓글 수정
app.put('/projects/:projectId/comments/:commentId', async (req, res) => {
  try {
    const projectId = req.params.projectId;
    const commentId = req.params.commentId;
    const {password, phone, content} = req.body;

    const projectCollection = await connectMongoDB();

    //project 조회
    const project = await projectCollection.findOne({
      _id: new mongodb.ObjectId(projectId),
      'comments.commentId' : commentId,
    })

    //project 아니면
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }

    // 댓글을 찾을 때는 프로젝트 ID와 comment ID 모두를 활용하여 검색해야 합니다.
    const comment = project.comments.find((c) => c.commentId === commentId);

    // 댓글의 비밀번호와 전화번호가 일치하는지 확인
    if (comment.password !== password || comment.phone !== phone) {
      return res.status(401).json({ message: 'Unauthorized to update the comment' });
    }

    // 댓글 업데이트
    comment.content = content;
    // 댓글 수정일 업데이트
    comment.createDate = new Date(); 
    const result = await projectCollection.updateOne(
      {
        _id: new mongodb.ObjectId(projectId),
        'comments.commentId': commentId,
      },
      { $set: { 'comments.$': comment } }
    );

    if (result.matchedCount === 0) {
      return res.status(404).json({ message: 'Project or Comment not found' });
    }

    res.json({ success: true, commentId: comment.commentId });
  } catch (error) {
    console.error('Error updating comment:', error);
    res.status(500).json({ success: false, error: 'Failed to update comment' });
  }
});

//-----------------------------------------------------------------------------------//


 /* -------------------------- 좋아요 가져오기------------------------- */
 app.get('/projects/:projectId/likes', async (req, res) => {
  try {

    const projectId = req.params.projectId;

    const projectCollection = await connectMongoDB();

    // 프로젝트 조회
    const project = await projectCollection.findOne({ _id: new mongodb.ObjectId(projectId) });

    if (!project) {

      return res.status(404).json({ message: 'Project not found' });

    }

    // 해당 프로젝트의 전체 댓글 조회
    const likes = project.likes;
    res.json({ success: true, likes: likes });


  } catch (error) {

    console.error('Error retrieving comments:', error);

    res.status(500).json({ message: 'Internal server error' });

  }

});



 /* -------------------------- 좋아요 증가시키기------------------------- */
 app.put('/projects/:projectId/likeplus', async (req, res) => {
  try {
    const projectId = req.params.projectId;

    const projectCollection = await connectMongoDB();

    //project 조회
    const project = await projectCollection.findOne({
      _id: new mongodb.ObjectId(projectId)
    })

    //project 아니면
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }

 

    const likes =project.likes+1;
  

    const result = await projectCollection.updateOne(
      { _id: new mongodb.ObjectId(projectId) },
      { $set: { likes: likes } }
    );

    if (result.matchedCount === 0) {
      return res.status(404).json({ message: 'Project or Comment not found' });
    }

    res.json({ success: true, likes:likes });
  } catch (error) {
    console.error('Error updating lkies:', error);
    res.status(500).json({ success: false, error: 'Failed to update likes' });
  }
});

 /* -------------------------- 좋아요 증가시키기------------------------- */
 app.put('/projects/:projectId/likeminus', async (req, res) => {
  try {
    const projectId = req.params.projectId;

    const projectCollection = await connectMongoDB();

    //project 조회
    const project = await projectCollection.findOne({
      _id: new mongodb.ObjectId(projectId)
    })

    //project 아니면
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }

 

    const likes =project.likes-1;
    

    const result = await projectCollection.updateOne(
      { _id: new mongodb.ObjectId(projectId) },
      { $set: { likes: likes } }
    );

    if (result.matchedCount === 0) {
      return res.status(404).json({ message: 'Project or Comment not found' });
    }

    res.json({ success: true, likes:likes });
  } catch (error) {
    console.error('Error updating lkies:', error);
    res.status(500).json({ success: false, error: 'Failed to update likes' });
  }
});
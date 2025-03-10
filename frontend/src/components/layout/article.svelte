<script>
    export let title = "The Voice of the Martians";
    export let author = "Jackson Levitt";
    export let content = "The Voice of the Martin";
  </script>
  
  <article class="article">
  
    <slot name="author">
        <h2 class="article-author">{author}</h2>
      </slot>

    <slot name="heading">
      <h1 class="article-title">{title}</h1>
    </slot>

    <slot name="image">
    </slot>
  
    <slot name="content">
      <p class="article-content">{content}</p>
    </slot>
  </article>
   
<style>
    .article {
      max-width: 100%;
      width: 90%;
      margin: 20px auto;
      padding: 20px;
      background: linear-gradient(to right, #0295fc, #175c8d, #0295fc) #0295fc; 
      border: 20px solid transparent;
      border-image: linear-gradient(#255b8d, #0295fc, #255b8d);
      border-image-slice: 1;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
      box-sizing: border-box;
      text-align: center;
    }
    .article-author{
      color: #0295fc;
      font-family: 'Winthorpe Sc', 'Courier New', Courier, monospace;
      text-shadow: 0.1vw -0.3vh #0d2e43;
    }
  
    .article-title {
      font-size: 5rem;
      font-family: 'Winthorpe Sc', 'Courier New', Courier, monospace;
      text-shadow: 0.25vw -0.8vh #0d2e43;
      text-transform: uppercase;
      color: #fcfffd;
      margin: 0px;
    }
  
    .article-content {
      font-size: 1.2rem;
      color: #e5e7e6;
      line-height: 1.6;
    }
  
    @media (max-width: 600px) {
      .article-title {
        font-size: 1.5rem;
      }
      .article-content {
        font-size: 0.9rem;
      }
    }
  </style>
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
      background: linear-gradient(to right, var(--background-color-light), var(--background-color-dark), var(--background-color-light)) var(--background-color-light); 
      border: 20px solid transparent;
      border-image: linear-gradient(var(--accent-color-dark), var(--accent-color-light), var(--accent-color-dark));
      border-image-slice: 1;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
      box-sizing: border-box;
      text-align: center;
    }
    .article-author{
      color: var(--accent-color-dark);
      font-family: 'Winthorpe Sc', 'Courier New', Courier, monospace;
      text-shadow: 0.1vw -0.3vh var(--background-color-dark);
    }
  
    .article-title {
      font-size: 5rem;
      font-family: 'Winthorpe Sc', 'Courier New', Courier, monospace;
      text-shadow: 0.25vw -0.8vh var(--background-color-dark);
      text-transform: uppercase;
      color: var(--text-color);
      margin: 0px;
    }
  
    p {
      font-size: 1.2rem;
      color: var(--text-color);
      line-height: 1.6;
    }
  
    @media (max-width: 750px) {
      .article-title {
        font-size: 2.5rem;
      }
      .article-content {
        font-size: 0.9rem;
      }
    }
  </style>
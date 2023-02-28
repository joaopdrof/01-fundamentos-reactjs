import { ThumbsUp, Trash } from 'phosphor-react'
import { useState } from 'react'
import { Avatar } from './Avatar'
import styles from './Comment.module.css'

export function Comment({ content, onDeleteComment }){
   
    const [likeCount, setLikeCount] = useState(0)
 
    function handleDeleteComment(){
        onDeleteComment(content)
    }

    function handleLikeComment(){
        setLikeCount((state) => {
            return state + 1
        });
    }

    return(
        <div className={styles.comment}>
             <Avatar 
                hasBorder={false}
                src="https://avatars.githubusercontent.com/u/53498198?v=4" 
            />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>João Pedro</strong>
                            <time title='02 de Fevereiro' dateTime='2023-02-02 15:07:00'>
                                Cerca de 1h atrás
                            </time>
                        </div>

                        <button onClick={handleDeleteComment} title='Deletar comentário'>
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>{ content }</p>
                </div>

                <footer>
                   <button onClick={handleLikeComment}>
                    <ThumbsUp />
                    Aplaudir  <span> {likeCount} </span>
                   </button>
                </footer>
            </div>

        </div>
    )
}
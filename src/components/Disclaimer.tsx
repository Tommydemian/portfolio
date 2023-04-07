import Articles from './Articles';

const Disclaimer = () => {
  return (
    <div className="text-center mt-16 sm:mt-0 font-Lato">
  <p className="text-lg dark:text-white font-medium mb-4">📝 Disclaimer:</p>
  <p className="text-gray600 dark:text-gray100 mb-4">
    The following section showcases my learning journey, including a 💻 coding bootcamp and selected courses from 🎓 Frontend Masters. It's worth noting that only the bootcamp has a fixed timeframe, while the rest are courses I chose based on their relevance to my education. 
  </p>
  <p className="text-gray600 dark:text-gray100 mb-4 font-Lato">
    Furthermore, this is not an exhaustive list of my studies; I've spent countless hours learning various topics. Nonetheless, I believe these particular courses have been instrumental in my growth as a developer. 
  </p>
  <p className="text-gray600 dark:text-gray100 font-Lato">
    Finally, I'd like to add that writing ✍🏼 has also been an integral part of my learning journey.
     Behold, my humble collection of literary works. Though these pieces did not receive the adoration they were due, the process of refining my thoughts and conveying them in a coherent manner proved to be a valuable exercise in itself.
     </p>
     <Articles />
</div>
    )
}

export default Disclaimer
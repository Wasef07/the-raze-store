import HomeCategoryCard from "./HomeCategoryCard"

const HomeCategory = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4 px-3 lg:px-8">
      {[...Array(16)].map((_, index) => (
        <HomeCategoryCard key={index} />
      ))}
    </div>
  )
}

export default HomeCategory

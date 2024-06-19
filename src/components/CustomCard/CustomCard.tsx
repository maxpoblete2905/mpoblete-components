import './scss/index.scss'

export interface Card  { 
  title: string, 
  image: string, 
  description: string 
}

export const CustomCard = (
  { 
    title, 
    image = "https://via.placeholder.com/300x200", 
    description 

  }: Card) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
}

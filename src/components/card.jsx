import Button from './button.jsx'

const Card = () => {
    return (
        <section className="card">
            <h6>Name</h6>
            <div className="img"></div>
            <div className="card__bottom">
                <Button key={'id1'} data={{
                    value: 'Like'
                }}/>
                <Button key={'id2'} data={{
                    value: 'No like'
                }}/>
            </div>
        </section>
    )
}
export default Card
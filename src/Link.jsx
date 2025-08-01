function Link({children,vinculo}){
    return <>
    <a className="link" href={vinculo}>{children}</a>
    </>
}

export default Link;
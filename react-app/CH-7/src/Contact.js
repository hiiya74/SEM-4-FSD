function Contact(){
    return(
        <>
            <form>
                <fieldset>
                    Name:<input type="text" placeholder="Name" required />
                    phone no:<input type="number" required />
                    <input type="submit" value="Submit" />

                </fieldset>
            </form>
        </>
    )

}
export default Contact;

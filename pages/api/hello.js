
export default (req, res) => {
  res.status(200).json({ 
      CompanyName: 'Yoomy', 
      CEOname: 'Gustavo Martins', 
      CTOname: 'Igor Bayerl', 
    }
  )
}

import { Fragment, useState } from "react";
import React from 'react'
import { Button, MenuItem, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextareaAutosize, TextField } from "@material-ui/core";
import LoopIcon from '@material-ui/icons/Loop';
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';
import Gantt from "./Gantt";


export default function Projets(props) {


    const [projects, setProjects] = useState({
        projet : {
            id:"",
            name:"",
            startDate:"",
            endDate:"",
            tasks:" ",
            notes:"",
            status:"",
            newProject:[]
        }
    })

    const handleChange = (event) => {
        setProjects({
            projet : {
                ...projects.projet,
                [event.target.name] : event.target.value
            }
        })
        console.log(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const {name, startDate, endDate, tasks, notes, status} = projects.projet

        setProjects({
            projet : {
                id:"", name:'', startDate:"",  endDate:'', tasks:'', notes:'', status:'', newProject:[...projects.projet.newProject, {id:Math.random(), name, startDate, endDate, tasks, notes, status}]
            }
            
        })
        console.log(startDate.substring(0,4))
        console.log(startDate.substring(5,7))
        console.log(startDate.substring(8,10))
    }

    /*Fonction Supression de chaque ligne*/
    const handleDelete = (id) => {
        if(window.confirm("Sur")){
            const deletion = projects.projet.newProject.filter(details => 
            details.id !== id)  
            setProjects({projet : {
                newProject : deletion}})
                console.log(id)
        } else {}  
    }

    /*Formulaire création d'un projet */
    const formProjects = () => {
        return(
                <TableRow>
                <TableCell>

                </TableCell>
                <TableCell>
                    <TextField required type='text' name='name' label='Nom du projet' value={projects.projet.name} onChange={handleChange}/>
                </TableCell>
                <TableCell>
                    <TextField required type='date' name='startDate' value={projects.projet.startDate} onChange={handleChange}/>
                </TableCell>
                <TableCell>
                    <TextField required type='date' name='endDate' value={projects.projet.endDate} onChange={handleChange}/>
                </TableCell>
                <TableCell>
                    <TextField required type='text' name='tasks' label='Tâches' value={projects.projet.tasks} onChange={handleChange}/>
                </TableCell>
                <TableCell>
                     <TextareaAutosize required type='text' name='notes' placeholder='Notes' value={projects.projet.notes} onChange={handleChange}/>
                </TableCell>
               <TableCell>
                <Select required name='status' label='Status' value={projects.projet.status} onChange={handleChange}>
                    <MenuItem value="">None</MenuItem>
                    <MenuItem value={1}><ClearIcon/></MenuItem>
                    <MenuItem value={2}><LoopIcon/></MenuItem>
                    <MenuItem value={3}><CheckIcon/></MenuItem>
                </Select>
                </TableCell>
                <TableCell>
                    <Button type='submit'>+</Button>
                </TableCell>
                    </TableRow>
        )
    }

    const handleUpdate = (id) => {
        const update = (projects.projet.newProject[id] === id)
            console.log(update)
            //     <TableRow>
            //     <TableCell>
            //     <TextField type='text' name='name' label='Nom du projet' value={projects.projet.newProject[id].name}/>
            //     </TableCell>
            //     <TableCell>
            //         <TextField type='date' name='date' value={projects.projet.newProject[id].date}/>
            //     </TableCell>
            //     <TableCell>
            //         <TextField type='text' name='tasks' label='Tâches' value={projects.projet.newProject[id].tasks}/>
            //     </TableCell>
            //     <TableCell>
            //          <TextareaAutosize type='text' name='notes' placeholder='Notes' value={projects.projet.newProject[id].notes}/>
            //     </TableCell>
            //    <TableCell>
            //     <TextField name='status' label='Status' value={projects.projet.newProject[id].status}/>
            //     </TableCell>
            //     </TableRow>
            
        }

/*Affichage des projets envoyé par le formulaire*/
    const RenderProjects = () => {
        return(  
            <form onSubmit={handleSubmit}>
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Nom du projet</TableCell>
                        <TableCell>Date Début</TableCell>
                        <TableCell>Date Limite</TableCell>
                        <TableCell>Tâches</TableCell>
                        <TableCell>Notes</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>{projects.projet.newProject.map(detail => (
                    <TableRow>
                        <TableCell>{detail.id}</TableCell>
                        <TableCell>{detail.name}</TableCell>
                        <TableCell>{detail.startDate}</TableCell>
                        <TableCell>{detail.endDate}</TableCell>
                        <TableCell>{detail.tasks}</TableCell>
                        <TableCell>{detail.notes}</TableCell>
                        <TableCell>{detail.status === 1 ? (<ClearIcon/>):(detail.status === 2 ? (<LoopIcon/>):(detail.status ===3 ? (<CheckIcon/>):(null)))}</TableCell>
                        <TableCell>
                            <Button type='button' onClick={handleDelete.bind(this, detail.id)}>X</Button>
                        </TableCell>
                        <TableCell>
                            <Button type='button' onClick={handleUpdate.bind(this, detail.id)}>U</Button>
                        </TableCell>
                    </TableRow>
                ))}
               {formProjects()}
                </TableBody>
            </Table>
        </TableContainer>
</form>
            
        )
      
    }





    return (
        <Fragment>
            {RenderProjects()}
            <Gantt project={projects.projet.newProject}/>
        </Fragment>
    )
}

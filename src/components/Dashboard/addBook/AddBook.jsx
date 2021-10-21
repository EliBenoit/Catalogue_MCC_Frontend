// package
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from 'react-hot-toast'

// component
import InputForm from "../../../shared/component/InputForm";
import { Button } from "rsuite";

// style
import "rsuite/dist/rsuite.min.css";
import '../../../shared/style/formStyle.css';
import "../../../shared/style/sectionHeader.css";

const AddBook = () => {
    const form = useForm()
    /**
     * 
     * Will be better to define an enumeration, base on the need of the library. 
     * And if we want to upgrade the concept, we can put kind in data base, and 
     * give the possibility to employee to add a new kind type.
     * 
     */
    const kind = ["Autobiographie", 'Aventure', "Enfant", "Polar", 'Science-fiction']

    function addingBook(data){
        /**
         * 
         * If the API back work, we need to push the new book data on the back. 
         * Here, before sending to the back, we will rename cover file, for some little security. 
         */
        toast.success(`${data.title} a bien été ajouté.`)
    }

    return (
            <form className="form section-form" onSubmit={form.handleSubmit(addingBook)}>
                <div>
                    <div className="input-label">
                        <label htmlFor="title" >Titre</label>
                        <InputForm 
                            name="title"
                            type="text"
                            placeholder="Titre de l'ouvrage"
                            form={form}
                            registerOptions={{
                            required: 'Le titre est requis.'}}
                        />
                    </div>
                    <div className="input-label">
                        <label htmlFor="author" >Auteur</label>
                        <InputForm 
                            name="author"
                            type="text"
                            placeholder="Nom de l'auteur"
                            form={form}
                            registerOptions={{
                            required: 'L\'auteur est requis.'}}
                        />
                    </div>
                    <div className="input-label">
                        <label htmlFor="kind" >Genre</label>
                        <InputForm 
                            name="kind"
                            type="select"
                            placeholder="Genre de l'ouvrage"
                            form={form}
                            registerOptions={{
                            required: 'Le genre est requis.'}}
                            options={kind}
                        />
                    </div>
                </div>
                <div>
                    <div className="input-label">
                        <label htmlFor="parution" >Date de publication</label>
                        <InputForm 
                            name="parution"
                            type="date"
                            placeholder="Date de publication"
                            form={form}
                            registerOptions={{
                            required: 'La date de publication est requise.'}}
                        />
                    </div>
                    <div className="input-label">
                        <label htmlFor="summary" >Résumé</label>
                        <InputForm 
                            name="summary"
                            type="textarea"
                            placeholder="Résumé de l'ouvrage"
                            form={form}
                            registerOptions={{
                            required: 'Le résumé est requis.'}}
                        />
                    </div>
                    <div className="input-label">
                    <label htmlFor="cover" >Image de couverture</label>
                        <InputForm 
                            name="cover"
                            type="file"
                            form={form}
                            registerOptions={{
                                required: 'La couverture est obligatoire.'}}
                        />
                    </div>
                </div>
                <Button appearance="primary" type="submit">Ajouter l'ouvrage</Button>
            </form>
    )
}

export default AddBook;